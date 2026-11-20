// PDFium-backed engine: lists every page object, then applies per-object edits
// (remove / fill white / make black), drops any pages left out, and saves a new PDF.
// It can also put several pages on each sheet (nUp).
// It works in the browser (inside worker.js) and in Node (the tests).

import { sheetLayout, fitInCell, altersPage } from './layout.js';

const OBJ_TYPES = { 1: 'text', 2: 'path', 3: 'image', 4: 'shading', 5: 'form' };

// Text render modes that paint with fill and/or stroke (ISO 32000 9.3.6).
const FILL_MODES = new Set([0, 2, 4, 6]);
const STROKE_MODES = new Set([1, 2, 5, 6]);

export class PdfEngine {
  /** @param {any} m module returned by @embedpdf/pdfium `init()` */
  constructor(m) {
    this.m = m;
    this.p = m.pdfium;
    m.PDFiumExt_Init();
  }

  static async create(init, wasmBinary) {
    return new PdfEngine(await init({ wasmBinary }));
  }

  // ---------- memory helpers ----------
  #alloc(n) { return this.p.wasmExports.malloc(n); }
  #free(ptr) { if (ptr) this.p.wasmExports.free(ptr); }
  #f32(ptr, i = 0) { return this.p.HEAPF32[(ptr >> 2) + i]; }
  #u32(ptr, i = 0) { return this.p.HEAPU32[(ptr >> 2) + i]; }
  #i32(ptr, i = 0) { return this.p.HEAP32[(ptr >> 2) + i]; }

  #open(bytes) {
    const ptr = this.#alloc(bytes.length);
    this.p.HEAPU8.set(bytes, ptr);
    const doc = this.m.FPDF_LoadMemDocument(ptr, bytes.length, '');
    if (!doc) {
      this.#free(ptr);
      const code = this.m.FPDF_GetLastError();
      const why = { 2: 'file is not a valid PDF', 3: 'file is damaged or not a PDF', 4: 'PDF is password-protected', 5: 'security handler not supported' }[code] || `error ${code}`;
      throw new Error(`Could not open PDF: ${why}`);
    }
    return { doc, ptr };
  }

  #close({ doc, ptr }) {
    this.m.FPDF_CloseDocument(doc);
    this.#free(ptr);
  }

  #color(obj, getter) {
    const buf = this.#alloc(16);
    try {
      if (!this.m[getter](obj, buf, buf + 4, buf + 8, buf + 12)) return null;
      return { r: this.#u32(buf, 0), g: this.#u32(buf, 1), b: this.#u32(buf, 2), a: this.#u32(buf, 3) };
    } finally { this.#free(buf); }
  }

  #bounds(obj) {
    const buf = this.#alloc(16);
    try {
      if (!this.m.FPDFPageObj_GetBounds(obj, buf, buf + 4, buf + 8, buf + 12)) return null;
      return [this.#f32(buf, 0), this.#f32(buf, 1), this.#f32(buf, 2), this.#f32(buf, 3)];
    } finally { this.#free(buf); }
  }

  #matrix(obj) {
    const buf = this.#alloc(24);
    try {
      if (!this.m.FPDFPageObj_GetMatrix(obj, buf)) return [1, 0, 0, 1, 0, 0];
      return [0, 1, 2, 3, 4, 5].map((i) => this.#f32(buf, i));
    } finally { this.#free(buf); }
  }

  #pathMode(obj) {
    const buf = this.#alloc(8);
    try {
      if (!this.m.FPDFPath_GetDrawMode(obj, buf, buf + 4)) return { fill: false, stroke: false };
      return { fill: this.#i32(buf, 0) !== 0, stroke: this.#i32(buf, 1) !== 0 };
    } finally { this.#free(buf); }
  }

  #text(obj, textPage) {
    if (!textPage) return '';
    const n = this.m.FPDFTextObj_GetText(obj, textPage, 0, 0);
    if (n <= 2) return '';
    const buf = this.#alloc(n);
    try {
      this.m.FPDFTextObj_GetText(obj, textPage, buf, n);
      return this.p.UTF16ToString(buf);
    } finally { this.#free(buf); }
  }

  #imageSize(obj) {
    const buf = this.#alloc(8);
    try {
      if (!this.m.FPDFImageObj_GetImagePixelSize(obj, buf, buf + 4)) return null;
      return [this.#u32(buf, 0), this.#u32(buf, 1)];
    } finally { this.#free(buf); }
  }

  #pageSize(doc, i) {
    const buf = this.#alloc(8);
    try {
      this.m.FPDF_GetPageSizeByIndexF(doc, i, buf);
      return [this.#f32(buf, 0), this.#f32(buf, 1)];
    } finally { this.#free(buf); }
  }

  /** Visit every object on a page, descending into form XObjects. */
  #walk(page, visit) {
    const recurse = (parent, count, get, path, ctm) => {
      for (let i = 0; i < count; i++) {
        const obj = get(i);
        if (!obj) continue;
        const p = [...path, i];
        const type = OBJ_TYPES[this.m.FPDFPageObj_GetType(obj)] || 'unknown';
        visit(obj, p, type, ctm, parent);
        if (type === 'form') {
          const inner = mul(this.#matrix(obj), ctm);
          recurse(obj, this.m.FPDFFormObj_CountObjects(obj), (j) => this.m.FPDFFormObj_GetObject(obj, j), p, inner);
        }
      }
    };
    recurse(0, this.m.FPDFPage_CountObjects(page), (i) => this.m.FPDFPage_GetObject(page, i), [], [1, 0, 0, 1, 0, 0]);
  }

  /**
   * Describe every page object. Coordinates are PDF user space (points, y up).
   * @returns {{pages: Array<{index:number,width:number,height:number,objects:any[]}>}}
   */
  analyze(bytes) {
    const h = this.#open(bytes);
    try {
      const count = this.m.FPDF_GetPageCount(h.doc);
      const pages = [];
      for (let pi = 0; pi < count; pi++) {
        const [width, height] = this.#pageSize(h.doc, pi);
        const page = this.m.FPDF_LoadPage(h.doc, pi);
        const textPage = this.m.FPDFText_LoadPage(page);
        const objects = [];
        let order = 0;
        this.#walk(page, (obj, path, type, ctm) => {
          const local = this.#bounds(obj);
          const o = {
            id: `${pi}:${path.join('.')}`,
            page: pi,
            path,
            parent: path.length > 1 ? `${pi}:${path.slice(0, -1).join('.')}` : null,
            order: order++,
            type,
            bounds: local ? transformRect(local, ctm) : null,
            fill: null,
            stroke: null,
          };
          if (type === 'text') {
            o.renderMode = this.m.FPDFTextObj_GetTextRenderMode(obj);
            o.text = this.#text(obj, textPage).slice(0, 200);
            if (FILL_MODES.has(o.renderMode)) o.fill = this.#color(obj, 'FPDFPageObj_GetFillColor');
            if (STROKE_MODES.has(o.renderMode)) o.stroke = this.#color(obj, 'FPDFPageObj_GetStrokeColor');
          } else if (type === 'path') {
            const mode = this.#pathMode(obj);
            if (mode.fill) o.fill = this.#color(obj, 'FPDFPageObj_GetFillColor');
            if (mode.stroke) o.stroke = this.#color(obj, 'FPDFPageObj_GetStrokeColor');
            o.segments = this.m.FPDFPath_CountSegments(obj);
          } else if (type === 'image') {
            o.pixels = this.#imageSize(obj);
          }
          objects.push(o);
        });
        if (textPage) this.m.FPDFText_ClosePage(textPage);
        this.m.FPDF_ClosePage(page);
        pages.push({ index: pi, width, height, objects });
      }
      return { pages };
    } finally {
      this.#close(h);
    }
  }

  /**
   * Apply edits and return the new PDF bytes.
   * @param {Uint8Array} bytes original PDF
   * @param {Record<string, 'remove'|'white'|'black'>} edits object id -> action
   * @param {number[]} [removedPages] 0-based indexes of pages to leave out of the result
   */
  apply(bytes, edits, removedPages = []) {
    const h = this.#open(bytes);
    try {
      const count = this.m.FPDF_GetPageCount(h.doc);
      const drop = [...new Set(removedPages)].filter((i) => Number.isInteger(i) && i >= 0 && i < count);
      if (count > 0 && drop.length >= count) throw new Error('At least one page has to stay');
      const dropped = new Set(drop);
      const byPage = new Map();
      for (const [id, action] of Object.entries(edits)) {
        if (!action || action === 'keep') continue;
        const pi = Number(id.split(':')[0]);
        if (dropped.has(pi)) continue;
        if (!byPage.has(pi)) byPage.set(pi, new Map());
        byPage.get(pi).set(id, action);
      }
      for (const [pi, actions] of byPage) {
        const page = this.m.FPDF_LoadPage(h.doc, pi);
        if (!page) continue;
        const removals = [];
        this.#walk(page, (obj, path, type, _ctm, parent) => {
          const action = actions.get(`${pi}:${path.join('.')}`);
          if (!action) return;
          if (action === 'remove') removals.push([parent, obj]);
          else if (action === 'white') this.#recolor(obj, type, 255);
          else if (action === 'black') this.#recolor(obj, type, 0);
        });
        // Remove deepest objects first so a parent form's removal cannot orphan a pending child removal.
        for (const [parent, obj] of removals.reverse()) {
          const ok = parent ? this.m.FPDFFormObj_RemoveObject(parent, obj) : this.m.FPDFPage_RemoveObject(page, obj);
          if (ok) this.m.FPDFPageObj_Destroy(obj);
        }
        if (!this.m.FPDFPage_GenerateContent(page)) throw new Error(`Could not rewrite page ${pi + 1}`);
        this.m.FPDF_ClosePage(page);
      }
      // Highest index first, so the indexes still to delete do not shift.
      for (const pi of drop.sort((a, b) => b - a)) this.m.FPDFPage_Delete(h.doc, pi);
      return this.#save(h.doc);
    } finally {
      this.#close(h);
    }
  }

  /**
   * Put several pages on each sheet and return the new PDF bytes. With 1 per sheet and margins, each
   * page is fitted inside them on a sheet of its own size; with 1 per sheet, no margins and a scale of 1
   * the PDF is returned as is.
   * Each page is embedded as a form XObject, so its text stays real and selectable. Annotations
   * (links, comments, form fields) are not carried over to the sheets.
   * @param {Uint8Array} bytes
   * @param {{perSheet: number, margin?: number | {top?: number, right?: number, bottom?: number, left?: number, gap?: number}, scale?: number}} opts
   *   margin in points, around the edge and between pages; a number means the same everywhere.
   *   scale (default 1) resizes every page's content about the centre of its place, after fitting it.
   */
  nUp(bytes, { perSheet, margin = 0, scale: zoom = 1 }) {
    if (perSheet === 1 && !altersPage(margin, zoom)) return bytes;
    const src = this.#open(bytes);
    const dest = this.m.FPDF_CreateNewDocument();
    try {
      const count = this.m.FPDF_GetPageCount(src.doc);
      const sizes = Array.from({ length: count }, (_, i) => this.#pageSize(src.doc, i)); // with /Rotate applied
      // With several per sheet the sheet takes the first page's size; alone, each page keeps its own.
      const first = sheetLayout(...sizes[0], perSheet, margin);
      let sheet = 0, lay = first;
      const finish = () => {
        if (!this.m.FPDFPage_GenerateContent(sheet)) throw new Error('Could not lay out the sheets');
        this.m.FPDF_ClosePage(sheet);
      };
      for (let i = 0; i < count; i++) {
        const slot = i % perSheet;
        if (slot === 0) {
          if (sheet) finish();
          if (perSheet === 1) lay = sheetLayout(...sizes[i], 1, margin);
          sheet = this.m.FPDFPage_New(dest, i / perSheet, lay.width, lay.height);
          if (!sheet) throw new Error('Could not create a sheet');
        }
        // The XObject's own matrix turns the page upright and puts it at [0, 0, w, h].
        const xobj = this.m.FPDF_NewXObjectFromPage(dest, src.doc, i);
        if (!xobj) throw new Error(`Could not place page ${i + 1}`);
        const form = this.m.FPDF_NewFormObjectFromXObject(xobj);
        this.m.FPDF_CloseXObject(xobj);
        const [w, h] = sizes[i];
        const { scale, x, y } = fitInCell(lay.cells[slot], w, h, zoom);
        this.m.FPDFPageObj_Transform(form, scale, 0, 0, scale, x, y);
        this.m.FPDFPage_InsertObject(sheet, form);
      }
      if (sheet) finish();
      return this.#save(dest);
    } finally {
      this.m.FPDF_CloseDocument(dest);
      this.#close(src);
    }
  }

  /**
   * Cut a PDF into consecutive pieces of `pagesPerFile` pages each (the last one may be shorter).
   * Each piece only carries the fonts and images its own pages use.
   * @param {Uint8Array} bytes
   * @param {number} pagesPerFile
   * @returns {Uint8Array[]}
   */
  split(bytes, pagesPerFile) {
    if (!Number.isInteger(pagesPerFile) || pagesPerFile < 1) throw new Error('Pages per file must be a whole number of at least 1');
    const src = this.#open(bytes);
    try {
      const count = this.m.FPDF_GetPageCount(src.doc);
      const parts = [];
      for (let first = 0; first < count; first += pagesPerFile) {
        const last = Math.min(first + pagesPerFile, count) - 1;
        const dest = this.m.FPDF_CreateNewDocument();
        try {
          if (!this.m.FPDF_ImportPages(dest, src.doc, `${first + 1}-${last + 1}`, 0)) {
            throw new Error(`Could not copy pages ${first + 1}–${last + 1}`);
          }
          this.m.FPDF_CopyViewerPreferences(dest, src.doc);
          parts.push(this.#save(dest));
        } finally {
          this.m.FPDF_CloseDocument(dest);
        }
      }
      return parts;
    } finally {
      this.#close(src);
    }
  }

  /**
   * Join several PDFs into one, their pages in the order given. The first file's viewer preferences
   * are kept. Annotations, links and form fields travel with their pages; bookmarks are not merged.
   * @param {Uint8Array[]} files
   * @returns {{bytes: Uint8Array, pageCounts: number[]}} the PDF, and how many pages each file gave it
   */
  merge(files) {
    if (!files.length) throw new Error('No PDFs to combine');
    const dest = this.m.FPDF_CreateNewDocument();
    const pageCounts = [];
    try {
      files.forEach((bytes, fi) => {
        let src;
        try {
          src = this.#open(bytes);
        } catch (err) {
          throw new Error(`File ${fi + 1}: ${err.message}`);
        }
        try {
          const count = this.m.FPDF_GetPageCount(src.doc);
          pageCounts.push(Math.max(0, count));
          if (count < 1) return;
          const at = this.m.FPDF_GetPageCount(dest);
          if (!this.m.FPDF_ImportPages(dest, src.doc, `1-${count}`, at)) {
            throw new Error(`Could not copy the pages of file ${fi + 1}`);
          }
          if (fi === 0) this.m.FPDF_CopyViewerPreferences(dest, src.doc);
        } finally {
          this.#close(src);
        }
      });
      if (this.m.FPDF_GetPageCount(dest) < 1) throw new Error('These PDFs have no pages');
      return { bytes: this.#save(dest), pageCounts };
    } finally {
      this.m.FPDF_CloseDocument(dest);
    }
  }

  #recolor(obj, type, v) {
    const fill = this.#color(obj, 'FPDFPageObj_GetFillColor');
    const stroke = this.#color(obj, 'FPDFPageObj_GetStrokeColor');
    if (type === 'text') {
      const mode = this.m.FPDFTextObj_GetTextRenderMode(obj);
      if (FILL_MODES.has(mode)) this.m.FPDFPageObj_SetFillColor(obj, v, v, v, fill?.a ?? 255);
      if (STROKE_MODES.has(mode)) this.m.FPDFPageObj_SetStrokeColor(obj, v, v, v, stroke?.a ?? 255);
    } else if (type === 'path') {
      const mode = this.#pathMode(obj);
      if (mode.fill) this.m.FPDFPageObj_SetFillColor(obj, v, v, v, fill?.a ?? 255);
      else if (mode.stroke) this.m.FPDFPageObj_SetStrokeColor(obj, v, v, v, stroke?.a ?? 255);
    }
  }

  #save(doc) {
    const writer = this.m.PDFiumExt_OpenFileWriter();
    try {
      if (!this.m.PDFiumExt_SaveAsCopy(doc, writer)) throw new Error('Could not save the edited PDF');
      const size = this.m.PDFiumExt_GetFileWriterSize(writer);
      const buf = this.#alloc(size);
      try {
        this.m.PDFiumExt_GetFileWriterData(writer, buf, size);
        return this.p.HEAPU8.slice(buf, buf + size);
      } finally { this.#free(buf); }
    } finally {
      this.m.PDFiumExt_CloseFileWriter(writer);
    }
  }
}

// a ⨉ b for PDF matrices [a b c d e f] (apply a, then b).
function mul(a, b) {
  return [
    a[0] * b[0] + a[1] * b[2],
    a[0] * b[1] + a[1] * b[3],
    a[2] * b[0] + a[3] * b[2],
    a[2] * b[1] + a[3] * b[3],
    a[4] * b[0] + a[5] * b[2] + b[4],
    a[4] * b[1] + a[5] * b[3] + b[5],
  ];
}

function transformRect([l, b, r, t], m) {
  const pts = [[l, b], [r, b], [l, t], [r, t]].map(([x, y]) => [m[0] * x + m[2] * y + m[4], m[1] * x + m[3] * y + m[5]]);
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
}
