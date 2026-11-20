import * as pdfjs from '../node_modules/pdfjs-dist/build/pdf.min.mjs';
import {
  DEFAULT_TOGGLES, classify, resolveActions, backdropTurnsLight, allowedActions, ACTION_LABELS, describe, hex, inkColor,
  objectsInRect,
} from './classify.js';
import {
  parsePageRanges, pageRuns, formatRun, removePages, restorePages, keepOnlyPages, outputIndex, splitRuns, splitFileNames,
} from './pages.js';
import { makeZip } from './zip.js';
import {
  MM, MARGINS_MM, DEFAULT_MARGIN_MM, MARGIN_LIMIT_MM, SIDES, SCALES_PCT, SCALE_LIMIT_PCT, sheetLayout, fitInCell,
  sheetCount, altersPage,
} from './layout.js';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('../node_modules/pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).href;
const PDFJS_OPTS = {
  cMapUrl: new URL('../node_modules/pdfjs-dist/cmaps/', import.meta.url).href,
  cMapPacked: true,
  standardFontDataUrl: new URL('../node_modules/pdfjs-dist/standard_fonts/', import.meta.url).href,
};

const $ = (id) => document.getElementById(id);

// ---------- PDFium worker RPC ----------
const worker = new Worker(new URL('./worker.js', import.meta.url), { type: 'module' });
let rpcId = 0;
const pending = new Map();
worker.onmessage = ({ data }) => {
  const p = pending.get(data.id);
  if (!p) return;
  pending.delete(data.id);
  data.ok ? p.resolve(data.result) : p.reject(new Error(data.error));
};
worker.onerror = (e) => showLoadError(`The PDF engine failed to start: ${e.message || 'unknown error'}`);
function call(type, payload, transfer = []) {
  const id = ++rpcId;
  return new Promise((resolve, reject) => {
    pending.set(id, { resolve, reject });
    worker.postMessage({ id, type, ...payload }, transfer);
  });
}

// ---------- state ----------
const state = {
  name: '',
  sources: [], // names of the file(s) the open PDF was made from, in order
  bytes: null,
  analysis: null,
  toggles: { ...DEFAULT_TOGGLES },
  overrides: {},
  actions: {},
  auto: {},
  page: 0,
  view: 'split',
  markers: true,
  selected: null,
  hover: null,
  stack: null, // { x, y, ids, index } for click-again-to-go-deeper
  tool: 'pick', // 'pick' (click one element) | 'area' (drag a rectangle)
  includeText: true, // whether area selection picks up text
  multi: [], // ids chosen with the area tool (2 or more)
  areas: [], // rectangles (PDF points) behind the area selection, kept so "Include text" can re-run them
  drag: null, // { side, x0, y0, x1, y1, add, active } while dragging a rectangle
  dragHits: [],
  origDoc: null,
  removedPages: new Set(), // 0-based indexes left out of the download
  editedDoc: null,
  editedBytes: null,
  editedRemoved: new Set(), // the removedPages that editedDoc was built with
  applySeq: 0,
  applying: null,
  upToDate: false, // editedBytes matches the current choices
  perSheet: 1, // pages printed on each sheet of the download: 1, 2 or 4
  // Space (mm) around the sheet's edge and between pages; negative pushes the page past the edge.
  margins: { top: DEFAULT_MARGIN_MM, right: DEFAULT_MARGIN_MM, bottom: DEFAULT_MARGIN_MM, left: DEFAULT_MARGIN_MM, gap: DEFAULT_MARGIN_MM },
  customMargins: false, // the margin menu shows the per-side fields
  scale: 100, // percent of the fitted size, applied to every page's content
  customScale: false, // the scale menu shows its number field
  split: false, // download a ZIP of smaller PDFs instead of one PDF
  splitSize: 10, // pages (of the download, so sheets when several per sheet) in each smaller PDF
};

const viewports = { before: null, after: null };
const renderTasks = { before: null, after: null };

// ---------- loading ----------
$('chooseBtn').onclick = $('openBtn').onclick = () => $('fileInput').click();
$('fileInput').onchange = (e) => { pickFiles(e.target.files); e.target.value = ''; };
document.addEventListener('dragover', (e) => { e.preventDefault(); document.body.classList.add('dragging'); });
document.addEventListener('dragleave', (e) => { if (!e.relatedTarget) document.body.classList.remove('dragging'); });
document.addEventListener('drop', (e) => {
  e.preventDefault();
  document.body.classList.remove('dragging');
  if ($('combineDialog').open) addToCombine(e.dataTransfer.files);
  else pickFiles(e.dataTransfer.files);
});

const isPdf = (f) => f.type === 'application/pdf' || /\.pdf$/i.test(f.name);

/**
 * With nothing open, one PDF opens straight away and several open the combine dialog. With a PDF open,
 * the dialog always opens, the open PDF listed first, so new files can be added to it or open instead.
 */
function pickFiles(list) {
  const pdfs = [...list].filter(isPdf);
  if (!pdfs.length) return;
  if (pdfs.length === 1 && !hasOpenPdf()) openFile(pdfs[0]);
  else showCombine(pdfs);
}

const hasOpenPdf = () => !!state.analysis && !$('workspace').hidden;

// ---------- combining several PDFs ----------
// Each entry is a File, or { current: true } for the PDF open in the editor.
const combine = { files: [] };
// File pickers do not keep the order files were clicked in, so sort what comes in by name (2 before 10).
const byName = (a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' });
const CURRENT = { current: true };

function showCombine(files) {
  const current = hasOpenPdf();
  combine.files = [...(current ? [CURRENT] : []), ...[...files].sort(byName)];
  $('combineTitle').textContent = current ? 'Add to the open PDF' : 'Combine PDFs';
  $('combineReplaceBtn').hidden = !current;
  $('combineError').hidden = true;
  renderCombine();
  if (!$('combineDialog').open) $('combineDialog').showModal();
}

function addToCombine(list) {
  const more = [...list].filter(isPdf).sort(byName);
  if (!more.length) return;
  combine.files.push(...more);
  $('combineError').hidden = true;
  renderCombine();
}

function formatSize(n) {
  return n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1024 / 1024).toFixed(1)} MB`;
}

const entryName = (f) => (f.current ? $('fileName').textContent : f.name);

function renderCombine(focus) {
  const list = $('combineList');
  list.textContent = '';
  const { files } = combine;
  files.forEach((f, i) => {
    const li = document.createElement('li');
    const name = document.createElement('span');
    name.className = 'name';
    name.textContent = entryName(f);
    name.title = f.current ? $('fileName').title || entryName(f) : f.name;
    const size = document.createElement('span');
    size.className = 'size';
    if (f.current) {
      size.textContent = `open now · ${plural(state.analysis.pages.length, 'page')}`;
      li.className = 'current';
    } else size.textContent = formatSize(f.size);
    const btn = (glyph, label, disabled, fn, key) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'btn';
      b.textContent = glyph;
      b.title = b.ariaLabel = `${label}: ${entryName(f)}`;
      b.disabled = disabled;
      b.dataset.key = `${key}:${i}`;
      b.onclick = fn;
      return b;
    };
    const move = (to) => () => {
      const [g] = files.splice(i, 1);
      files.splice(to, 0, g);
      renderCombine(`${to < i ? 'up' : 'down'}:${to}`);
    };
    li.append(name, size,
      btn('↑', 'Move up', i === 0, move(i - 1), 'up'),
      btn('↓', 'Move down', i === files.length - 1, move(i + 1), 'down'),
      btn('×', 'Leave out', false, () => { files.splice(i, 1); renderCombine(); }, 'drop'));
    list.append(li);
  });
  // Keep the keyboard on the moved file's button; fall back to a neighbour when it hit the end of the list.
  if (focus) {
    const el = list.querySelector(`[data-key="${focus}"]`);
    const alt = list.querySelector(`[data-key="${focus.startsWith('up') ? 'down' : 'up'}:${focus.split(':')[1]}"]`);
    (el && !el.disabled ? el : alt)?.focus();
  }
  const n = files.length;
  const onlyCurrent = n === 1 && files[0].current;
  $('combineOkBtn').disabled = n === 0 || onlyCurrent;
  $('combineOkBtn').textContent = n === 1 && !onlyCurrent ? 'Open 1 PDF' : `Combine ${n} PDFs`;
  $('combineReplaceBtn').disabled = !files.some((f) => !f.current);
  const keeps = files.some((f) => f.current) && (Object.keys(state.overrides).length || state.removedPages.size);
  $('combineHint').textContent = 'The pages are joined in this order into one PDF, which you can then clean up and download.'
    + (keeps ? ' Your choices and removed pages in the open PDF are kept.' : '');
}

$('combineAddBtn').onclick = () => $('combineInput').click();
$('combineInput').onchange = (e) => { addToCombine(e.target.files); e.target.value = ''; };
$('combineCancelBtn').onclick = () => $('combineDialog').close();
// Leave the open PDF out and open only the new files.
$('combineReplaceBtn').onclick = () => {
  combine.files = combine.files.filter((f) => !f.current);
  $('combineForm').requestSubmit();
};
$('combineForm').onsubmit = async (e) => {
  e.preventDefault();
  const { files } = combine;
  if (!files.length || (files.length === 1 && files[0].current)) return;
  if (files.length === 1) {
    $('combineDialog').close();
    openFile(files[0]);
    return;
  }
  const ok = $('combineOkBtn');
  ok.disabled = true;
  ok.textContent = 'Combining…';
  $('combineError').hidden = true;
  try {
    const buffers = await Promise.all(files.map((f) => (f.current ? state.bytes.slice().buffer : f.arrayBuffer())));
    const { bytes, pageCounts } = await call('merge', { files: buffers }, buffers);
    const sources = files.flatMap((f) => (f.current ? state.sources : [f.name]));
    // Carry the open PDF's choices over to where its pages now sit. Ids are "<page>:<path>".
    const at = files.findIndex((f) => f.current);
    let keep;
    if (at >= 0) {
      const offset = pageCounts.slice(0, at).reduce((a, b) => a + b, 0);
      const overrides = {};
      for (const [id, action] of Object.entries(state.overrides)) {
        const colon = id.indexOf(':');
        overrides[`${Number(id.slice(0, colon)) + offset}${id.slice(colon)}`] = action;
      }
      keep = { overrides, removedPages: new Set([...state.removedPages].map((p) => p + offset)), page: state.page + offset };
    }
    $('combineDialog').close();
    await openBytes(sources, bytes, keep);
  } catch (err) {
    console.error(err);
    $('combineError').textContent = `Could not combine these PDFs: ${err.message}`;
    $('combineError').hidden = false;
  } finally {
    renderCombine();
  }
};

function showLoadError(msg) {
  $('dropzone').hidden = false;
  $('workspace').hidden = true;
  $('loadError').textContent = msg;
  $('loadError').hidden = false;
}

async function openFile(file) {
  $('chooseBtn').disabled = true;
  $('chooseBtn').textContent = 'Reading…';
  let bytes;
  try {
    bytes = new Uint8Array(await file.arrayBuffer());
  } catch (err) {
    showLoadError(err.message);
    return;
  } finally {
    $('chooseBtn').disabled = false;
    $('chooseBtn').textContent = 'Choose a PDF';
  }
  await openBytes([file.name], bytes);
}

/**
 * Show a PDF in the editor. `sources` names the file or files it was made from, in order; downloads are named
 * after the first. `keep` carries choices over from the PDF open before (when it was combined into this one).
 */
async function openBytes(sources, bytes, keep = null) {
  const first = sources[0].replace(/\.pdf$/i, '');
  const more = sources.length > 1 ? ` + ${sources.length - 1} more` : '';
  const name = `${first}${more}.pdf`;
  $('loadError').hidden = true;
  $('chooseBtn').disabled = true;
  $('chooseBtn').textContent = 'Reading…';
  try {
    const analysis = classify(await call('load', { bytes: bytes.slice().buffer }));
    thumbs.gen++; // thumbnails still being drawn belong to the old file
    state.origDoc?.destroy();
    state.editedDoc?.destroy();
    Object.assign(state, {
      name, sources, bytes, analysis, overrides: keep?.overrides || {}, page: 0, selected: null, hover: null, stack: null,
      multi: [], areas: [], drag: null, dragHits: [],
      removedPages: keep?.removedPages || new Set(), editedDoc: null, editedBytes: null, editedRemoved: new Set(),
    });
    $('rangeInput').value = '';
    rangeMessage();
    $('removedRuns').textContent = $('keptRuns').textContent = ''; // a new file starts with every run closed
    listsKey = null;
    updatePagesUi();
    state.origDoc = await pdfjs.getDocument({ data: bytes.slice(), ...PDFJS_OPTS }).promise;
    $('fileName').textContent = more ? `${sources[0]}${more}` : sources[0];
    $('fileName').title = more ? sources.join('\n') : '';
    $('dropzone').hidden = true;
    $('workspace').hidden = false;
    $('openBtn').hidden = false;
    buildThumbs();
    recompute();
    await showPage(Math.min(keep?.page || 0, analysis.pages.length - 1));
  } catch (err) {
    console.error(err);
    showLoadError(err.message);
  } finally {
    $('chooseBtn').disabled = false;
    $('chooseBtn').textContent = 'Choose a PDF';
  }
}

// ---------- decisions ----------
function recompute() {
  const { actions, auto } = resolveActions(state.analysis, state.toggles, state.overrides);
  state.actions = actions;
  state.auto = auto;
  updateCounts();
  renderSidebar();
  drawOverlays();
  scheduleApply();
}

const actionOf = (id) => state.actions[id] || 'keep';
const pageData = () => state.analysis.pages[state.page];

function setAction(id, action) { setActions([id], action); }

/** Apply action to every id that supports it, in one recompute. */
function setActions(ids, action) {
  const page = pageData();
  for (const id of ids) {
    const o = page.byId.get(id);
    if (!o || !allowedActions(o).includes(action)) continue;
    if (action === (state.auto[id] || 'keep')) delete state.overrides[id];
    else state.overrides[id] = action;
  }
  recompute();
}

/** Everything currently selected: the area selection, or the single clicked element. */
const selectedIds = () => (state.multi.length ? state.multi : state.selected ? [state.selected] : []);

function updateCounts() {
  const all = state.analysis.pages.flatMap((p) => p.objects);
  const n = (f) => all.filter(f).length;
  const bg = n((o) => o.role === 'background' && o.confidence === 'high');
  const maybe = n((o) => o.role === 'background' && o.confidence === 'low');
  $('cBackgrounds').textContent = `${bg} found${maybe ? `, ${maybe} possible (off)` : ''}`;
  $('cImages').textContent = `${n((o) => o.role === 'image')} found`;
  const light = n((o) => o.role === 'lightText' || o.role === 'lightArt');
  const turned = n((o) => (o.role === 'lightText' || o.role === 'lightArt') && state.auto[o.id] === 'black');
  $('cText').textContent = `${light} on dark backgrounds${state.toggles.text ? `, ${turned} turned black` : ''}`;
  $('resetBtn').hidden = Object.keys(state.overrides).length === 0;
  $('resetBtn').textContent = `Undo all my choices (${Object.keys(state.overrides).length})`;
}

// Browsers bring back a checkbox's state on reload, so set every control from the state rather than trust it.
for (const [key, el] of [['backgrounds', 'tBackgrounds'], ['images', 'tImages'], ['text', 'tText']]) {
  $(el).checked = state.toggles[key];
  $(el).onchange = (e) => { state.toggles[key] = e.target.checked; recompute(); };
}
$('resetBtn').onclick = () => { state.overrides = {}; recompute(); };

// ---------- applying edits (debounced, latest wins) ----------
let applyTimer = null;
function scheduleApply() {
  clearTimeout(applyTimer);
  $('busy').hidden = false;
  $('busy').textContent = 'Updating…';
  $('downloadBtn').disabled = true;
  state.upToDate = false;
  applyTimer = setTimeout(runApply, 200);
}

function runApply() {
  const seq = ++state.applySeq;
  const edits = { ...state.actions };
  const removed = new Set(state.removedPages);
  state.applying = (async () => {
    try {
      const out = await call('apply', { edits, removedPages: [...removed] });
      if (seq !== state.applySeq) return;
      const doc = await pdfjs.getDocument({ data: out.slice(), ...PDFJS_OPTS }).promise;
      if (seq !== state.applySeq) { doc.destroy(); return; }
      const old = state.editedDoc;
      state.editedDoc = doc;
      state.editedBytes = out;
      state.editedRemoved = removed;
      await renderSide('after');
      old?.destroy();
      state.upToDate = true;
      $('busy').hidden = true;
      $('downloadBtn').disabled = false;
    } catch (err) {
      if (seq !== state.applySeq) return;
      console.error(err);
      $('busy').hidden = false;
      $('busy').textContent = `Could not apply edits: ${err.message}`;
    }
  })();
}

$('downloadBtn').onclick = async () => {
  if (!state.editedBytes || !state.upToDate) return;
  const btn = $('downloadBtn');
  const { perSheet } = state;
  let bytes = state.editedBytes;
  let suffix = 'printable';
  const busy = (text) => { $('busy').hidden = false; $('busy').textContent = text; };
  btn.disabled = true;
  try {
    if (perSheet > 1 || altersPage(state.margins, zoom())) {
      busy('Laying out sheets…');
      const copy = bytes.slice();
      try {
        bytes = await call('nUp', { bytes: copy.buffer, perSheet, margin: marginPoints(), scale: zoom() }, [copy.buffer]);
      } catch (err) {
        console.error(err);
        busy(`Could not lay out the sheets: ${err.message}`);
        return;
      }
      suffix += perSheet > 1 ? `, ${perSheet} per sheet` : `, ${marginLabel()}`;
      if (state.scale !== 100) suffix += `, ${state.scale}% scale`;
    }
    const base = state.name.replace(/\.pdf$/i, '') + ` (${suffix})`;
    if (!state.split) {
      if (state.upToDate) $('busy').hidden = true;
      save(new Blob([bytes], { type: 'application/pdf' }), `${base}.pdf`);
      return;
    }
    busy('Splitting into files…');
    const size = state.splitSize;
    let parts;
    try {
      const copy = bytes.slice();
      parts = await call('split', { bytes: copy.buffer, pagesPerFile: size }, [copy.buffer]);
    } catch (err) {
      console.error(err);
      busy(`Could not split the PDF: ${err.message}`);
      return;
    }
    const names = splitFileNames(base, splitRuns(outputPages(), size)); // outputPages() is the page count of `bytes`
    let zip;
    try {
      zip = makeZip(parts.map((data, i) => ({ name: names[i], data })));
    } catch (err) {
      busy(`Could not make the ZIP file: ${err.message}`);
      return;
    }
    if (state.upToDate) $('busy').hidden = true;
    save(new Blob([zip], { type: 'application/zip' }), `${base}, ${plural(size, 'page')} per file.zip`);
  } finally {
    btn.disabled = !state.upToDate; // an edit made meanwhile keeps it off until it is applied
  }
};

function save(blob, name) {
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 10000);
}

/** Pages in the downloaded PDF: the kept pages, or the sheets they fill with several per sheet. */
const outputPages = () => sheetCount(state.analysis.pages.length - state.removedPages.size, state.perSheet);

// ---------- splitting into several files ----------
/** Bring the split panel and the download button's label in line with the state. */
function renderSplit() {
  $('splitGrid').hidden = !state.split;
  $('downloadLabel').textContent = state.split ? 'Download ZIP' : 'Download printable PDF';
  const sum = $('splitSum');
  if (!state.split || !state.analysis) { sum.textContent = ''; return; }
  const total = outputPages();
  const runs = splitRuns(total, state.splitSize);
  const unit = state.perSheet > 1 ? 'sheet' : 'page';
  $('splitUnit').textContent = `${unit}s`;
  const last = runs.at(-1)[1] - runs.at(-1)[0] + 1;
  sum.textContent = runs.length === 1
    ? `The download has ${plural(total, unit)}, so this makes 1 file.`
    : `${plural(runs.length, 'file')}: ${last === state.splitSize ? `each ${plural(state.splitSize, unit)}`
      : `${runs.length - 1} of ${plural(state.splitSize, unit)}, the last of ${last}`}.`;
}

$('splitChk').checked = state.split;
$('splitInput').value = state.splitSize;
renderSplit();
$('splitChk').onchange = (e) => {
  state.split = e.target.checked;
  renderSplit();
  if (state.split) $('splitInput').focus();
};
$('splitInput').oninput = () => {
  const input = $('splitInput');
  const v = input.value.trim() === '' ? NaN : Number(input.value);
  const ok = Number.isInteger(v) && v >= 1 && v <= 9999;
  input.toggleAttribute('aria-invalid', !ok);
  if (!ok) return;
  state.splitSize = v;
  renderSplit();
};
$('splitInput').onblur = () => { $('splitInput').value = state.splitSize; $('splitInput').removeAttribute('aria-invalid'); };

// ---------- print layout (pages per sheet) ----------
const zoom = () => state.scale / 100;
const marginPoints = () => Object.fromEntries(Object.entries(state.margins).map(([k, v]) => [k, v * MM]));
const fmtMm = (v) => String(v).replace('-', '−');

/** The margin when it is the same on every side (and between pages, for several per sheet), else null. */
function uniformMargin() {
  const m = state.margins;
  const keys = state.perSheet > 1 ? [...SIDES, 'gap'] : SIDES;
  return keys.every((k) => m[k] === m.top) ? m.top : null;
}

function marginLabel() {
  const u = uniformMargin();
  if (u === 0) return 'no margin';
  if (u !== null) return `${fmtMm(u)} mm margin`;
  const m = state.margins;
  const sides = `margins ${SIDES.map((k) => fmtMm(m[k])).join(' / ')} mm`;
  return state.perSheet > 1 ? `${sides}, ${fmtMm(m.gap)} mm between` : sides;
}

for (const mm of MARGINS_MM) {
  const opt = document.createElement('option');
  opt.value = mm;
  opt.textContent = mm ? `${mm} mm (${(mm / 25.4).toFixed(2).replace(/0$/, '')} in)` : 'None';
  $('marginSel').append(opt);
}
$('marginSel').append(new Option('Custom…', 'custom'));

const marginInputs = [...$('marginGrid').querySelectorAll('input[data-side]')];

/** Bring the margin menu in line with the state: the chosen preset, or the per-side fields. */
function syncMarginUi() {
  const u = uniformMargin();
  const preset = !state.customMargins && MARGINS_MM.includes(u);
  $('marginSel').value = preset ? String(u) : 'custom';
  $('marginGrid').hidden = preset;
  $('gapRow').hidden = state.perSheet === 1;
  for (const input of marginInputs) {
    if (document.activeElement !== input) input.value = state.margins[input.dataset.side];
    input.removeAttribute('aria-invalid');
  }
}

let marginTimer;
function marginsChanged() {
  renderLayout();
  clearTimeout(marginTimer); // typing a value should not re-render the preview on every key
  marginTimer = setTimeout(() => state.analysis && renderSide('after'), 150);
}

$('marginSel').onchange = (e) => {
  state.customMargins = e.target.value === 'custom';
  if (!state.customMargins) {
    const mm = Number(e.target.value);
    for (const k of Object.keys(state.margins)) state.margins[k] = mm;
  }
  syncMarginUi();
  if (state.customMargins) marginInputs[0].focus();
  marginsChanged();
};

for (const input of marginInputs) {
  input.oninput = () => {
    const v = input.value.trim() === '' ? NaN : Number(input.value);
    const ok = Number.isFinite(v) && Math.abs(v) <= MARGIN_LIMIT_MM;
    input.toggleAttribute('aria-invalid', !ok);
    if (!ok) return;
    state.margins[input.dataset.side] = v;
    marginsChanged();
  };
  input.onblur = () => { input.value = state.margins[input.dataset.side]; input.removeAttribute('aria-invalid'); };
}

// ---------- scale ----------
for (const pct of SCALES_PCT) $('scaleSel').append(new Option(pct === 100 ? '100% (fit)' : `${pct}%`, pct));
$('scaleSel').append(new Option('Custom…', 'custom'));

/** Bring the scale menu in line with the state: the chosen preset, or the custom field. */
function syncScaleUi() {
  const preset = !state.customScale && SCALES_PCT.includes(state.scale);
  $('scaleSel').value = preset ? String(state.scale) : 'custom';
  $('scaleGrid').hidden = preset;
  if (document.activeElement !== $('scaleInput')) $('scaleInput').value = state.scale;
  $('scaleInput').removeAttribute('aria-invalid');
}

$('scaleSel').onchange = (e) => {
  state.customScale = e.target.value === 'custom';
  if (!state.customScale) state.scale = Number(e.target.value);
  syncScaleUi();
  if (state.customScale) $('scaleInput').focus();
  marginsChanged();
};

$('scaleInput').oninput = () => {
  const input = $('scaleInput');
  const v = input.value.trim() === '' ? NaN : Number(input.value);
  const [lo, hi] = SCALE_LIMIT_PCT;
  const ok = Number.isFinite(v) && v >= lo && v <= hi;
  input.toggleAttribute('aria-invalid', !ok);
  if (!ok) return;
  state.scale = v;
  marginsChanged();
};
$('scaleInput').onblur = () => { $('scaleInput').value = state.scale; $('scaleInput').removeAttribute('aria-invalid'); };
syncScaleUi();

// Remember whether the panel is folded away; nothing breaks if storage is unavailable.
try { if (localStorage.getItem('layoutPanelOpen') === '0') $('layoutPanel').open = false; } catch {}
$('layoutPanel').ontoggle = () => {
  try { localStorage.setItem('layoutPanelOpen', $('layoutPanel').open ? '1' : '0'); } catch {}
};
syncMarginUi();

document.querySelectorAll('.seg button[data-per-sheet]').forEach((b) => {
  b.onclick = () => {
    state.perSheet = Number(b.dataset.perSheet);
    document.querySelectorAll('.seg button[data-per-sheet]').forEach((x) => {
      x.classList.toggle('on', x === b);
      x.setAttribute('aria-checked', String(x === b));
    });
    syncMarginUi();
    updatePagesUi();
    renderSide('after');
  };
});

const keptPages = () => state.analysis.pages.map((_, i) => i).filter((i) => !state.removedPages.has(i));

/** Sketch of the sheet that holds the current page (or the first sheet), drawn to scale. */
function renderLayout() {
  const box = $('layoutPreview');
  const msg = $('layoutMsg');
  const { perSheet } = state;
  const alone = perSheet === 1;
  $('layoutSum').textContent = `${perSheet} per sheet · ${marginLabel()}${state.scale !== 100 ? ` · ${state.scale}%` : ''}`;
  box.hidden = alone && !altersPage(state.margins, zoom());
  if (box.hidden) { msg.textContent = 'Each page prints on its own sheet.'; return; }
  if (!state.analysis) return;
  const kept = keptPages();
  const sizes = kept.map((i) => [state.analysis.pages[i].width, state.analysis.pages[i].height]);
  const out = outputIndex(state.page, state.removedPages);
  const sheetNo = Math.max(0, Math.floor(out / perSheet));
  // A page alone keeps its own size; shared sheets take the size of the first page.
  const lay = sheetLayout(...sizes[alone ? sheetNo : 0], perSheet, marginPoints());
  const total = sheetCount(kept.length, perSheet);

  const W = 132; // preview width in px for the longer side
  const k = W / Math.max(lay.width, lay.height);
  box.textContent = '';
  box.style.width = `${lay.width * k}px`;
  box.style.height = `${lay.height * k}px`;
  for (let slot = 0; slot < perSheet; slot++) {
    const n = sheetNo * perSheet + slot;
    if (n >= kept.length) break;
    const [w, h] = sizes[n];
    const { scale, x, y } = fitInCell(lay.cells[slot], w, h, zoom());
    const el = document.createElement('div');
    el.className = 'mini-page' + (kept[n] === state.page ? ' current' : '');
    el.textContent = kept[n] + 1;
    Object.assign(el.style, {
      left: `${x * k}px`, bottom: `${y * k}px`, width: `${w * scale * k}px`, height: `${h * scale * k}px`,
    });
    box.append(el);
  }
  const where = out < 0 ? 'This page is removed.' : `Page ${state.page + 1} is on sheet ${sheetNo + 1} of ${total}.`;
  const cut = Object.values(state.margins).some((v) => v < 0)
    ? ' Where a margin is negative, the page runs past the sheet\'s edge and that part is cut off.' : '';
  const scaled = state.scale === 100 ? ''
    : state.scale < 100 ? ` Every page is shrunk to ${state.scale}% of the size that fits, centred.`
    : alone ? ` Every page is enlarged to ${state.scale}%, so it grows past the margins and whatever lies beyond the sheet's edge is cut off.`
    : ` Every page is enlarged to ${state.scale}%, so pages grow past their places and can overlap.`;
  msg.textContent = alone
    ? `Each page prints on its own sheet, fitted inside the margins and centred.${cut}${scaled} Links and comments are not kept.`
    : `${where} The sheet takes the size of page ${kept[0] + 1}.${cut}${scaled} Links and comments are not kept on shared sheets.`;
}

// ---------- removing pages ----------
const pageCount = () => state.analysis.pages.length;

function setRemovedPages(next) {
  state.removedPages = next;
  updatePagesUi();
  scheduleApply();
  renderSide('after'); // show or hide the "removed" placeholder right away
}

const DEFAULT_RANGE_HINT = 'Separate pages with commas. 5-8 is a range, 12- runs to the last page.';

function rangeMessage(text = DEFAULT_RANGE_HINT, bad = false) {
  $('rangeMsg').textContent = text;
  $('rangeMsg').classList.toggle('bad', bad);
  $('rangeInput').setAttribute('aria-invalid', String(bad));
}

const plural = (n, one, many = `${one}s`) => `${n} ${n === 1 ? one : many}`;

/** "Remove these" (mode 'remove') or "Keep only these" (mode 'keep') for the typed page list. */
function applyRange(mode) {
  const count = pageCount();
  const r = parsePageRanges($('rangeInput').value, count);
  if (r.error) { rangeMessage(r.error, true); $('rangeInput').focus(); return; }
  const prev = state.removedPages;
  const next = mode === 'keep' ? keepOnlyPages(prev, r.pages, count) : removePages(prev, r.pages);
  if (next.size >= count) {
    rangeMessage(mode === 'keep'
      ? 'Those pages are all removed already, so nothing would be left. Restore some pages first.'
      : 'That would remove every page. At least one page has to stay.', true);
    $('rangeInput').focus();
    return;
  }
  const added = next.size - prev.size;
  setRemovedPages(next);
  $('rangeInput').value = '';
  rangeMessage(added ? `Removed ${plural(added, 'page')}.` : 'Those pages were already removed.');
}

$('rangeForm').onsubmit = (e) => { e.preventDefault(); applyRange('remove'); };
$('keepRangeBtn').onclick = () => applyRange('keep');
$('rangeInput').addEventListener('input', () => rangeMessage());
$('rangeInput').addEventListener('keydown', (e) => { if (e.key === 'Escape') { e.target.value = ''; rangeMessage(); e.target.blur(); } });
$('restorePagesBtn').onclick = () => { setRemovedPages(new Set()); rangeMessage(); };

function toggleCurrentPage() {
  const next = new Set(state.removedPages);
  if (next.has(state.page)) next.delete(state.page);
  else if (next.size + 1 < pageCount()) next.add(state.page);
  else return; // the last page left in the download
  setRemovedPages(next);
}
$('togglePageBtn').onclick = $('restorePageBtn').onclick = toggleCurrentPage;

function updatePagesUi() {
  if (!state.analysis) return;
  const count = pageCount();
  const removed = state.removedPages;
  const isRemoved = removed.has(state.page);
  const lastOne = !isRemoved && removed.size + 1 >= count;

  const btn = $('togglePageBtn');
  btn.textContent = isRemoved ? 'Restore page' : 'Remove page';
  btn.disabled = lastOne;
  btn.title = lastOne ? 'This is the only page left in the download'
    : isRemoved ? 'Put this page back in the download (X)' : 'Leave this page out of the download (X)';
  $('removedBadge').hidden = !isRemoved;

  const summary = $('pagesSummary');
  summary.hidden = removed.size === 0;
  if (removed.size) {
    summary.textContent = '';
    const strong = document.createElement('strong');
    strong.textContent = `${plural(removed.size, 'page')} removed.`;
    summary.append(strong, ` The download has ${plural(count - removed.size, 'page')}.`);
  }
  renderPageLists();
  markThumbs();

  const out = outputIndex(state.page, removed);
  const onSheet = state.perSheet > 1
    ? `, sheet ${Math.floor(out / state.perSheet) + 1} of ${sheetCount(count - removed.size, state.perSheet)}` : '';
  $('afterSub').textContent = isRemoved ? 'not in the download'
    : removed.size || onSheet ? `page ${out + 1} of ${count - removed.size}${onSheet} in the download`
    : 'the PDF you will download';
  renderLayout();
  renderSplit();
}

// Removed and kept pages, one row per run of consecutive pages. A run of several pages opens
// up into its single pages, so part of a range can be restored (or removed) on its own.
const LISTS = {
  removed: { verb: 'Restore', glyph: '↩', tip: 'Put back in the download' },
  kept: { verb: 'Remove', glyph: '×', tip: 'Leave out of the download' },
};
let listsKey = null; // the removed set the lists were last built for
const openRuns = { removed: [], kept: [] }; // [first, last] of the runs left open

const runName = ([a, b]) => (a === b ? `Page ${a + 1}` : `Pages ${formatRun([a, b])}`);
const runPages = ([a, b]) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

/** Restore (removed list) or remove (kept list) `pages`, and say what happened. */
function changePages(kind, pages) {
  const label = pages.length === 1 ? `page ${pages[0] + 1}` : `pages ${formatRun([pages[0], pages.at(-1)])}`;
  if (kind === 'removed') {
    setRemovedPages(restorePages(state.removedPages, pages));
    rangeMessage(`Restored ${label}.`);
  } else {
    const next = removePages(state.removedPages, pages);
    if (next.size >= pageCount()) return;
    setRemovedPages(next);
    rangeMessage(`Removed ${label}.`);
  }
}

function runEl(kind, run, keptCount) {
  const { verb, glyph, tip } = LISTS[kind];
  const pages = runPages(run);
  const blocked = kind === 'kept' && pages.length >= keptCount; // would leave nothing to download
  const li = document.createElement('li');
  li.className = 'run';
  li.dataset.first = run[0];
  li.dataset.last = run[1];

  const act = document.createElement('button');
  act.type = 'button';
  act.className = 'btn small run-act';
  act.textContent = verb;
  act.disabled = blocked;
  act.title = blocked ? 'At least one page has to stay in the download' : `${tip}: ${runName(run).toLowerCase()}`;
  act.onclick = (e) => { e.preventDefault(); changePages(kind, pages); };

  if (pages.length === 1) {
    const row = document.createElement('div');
    row.className = 'run-row';
    const go = document.createElement('button');
    go.type = 'button';
    go.className = 'run-go';
    go.textContent = runName(run);
    go.title = `Go to page ${run[0] + 1}`;
    go.onclick = () => showPage(run[0]);
    row.append(go, act);
    li.appendChild(row);
    return li;
  }

  const d = document.createElement('details');
  d.className = 'run-pages';
  const s = document.createElement('summary');
  s.className = 'run-row';
  const name = document.createElement('span');
  name.className = 'run-name';
  name.textContent = runName(run);
  const n = document.createElement('span');
  n.className = 'count';
  n.textContent = pages.length;
  s.append(name, n, act);
  d.appendChild(s);

  // Single pages are built when the run is first opened: a long kept run can hold hundreds.
  const fill = () => {
    if (!d.open || d.childElementCount > 1) return;
    const chips = document.createElement('div');
    chips.className = 'chips';
    for (const p of pages) {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.dataset.page = p;
      const go = document.createElement('button');
      go.type = 'button';
      go.className = 'chip-go';
      go.textContent = p + 1;
      go.title = `Go to page ${p + 1}`;
      go.onclick = () => showPage(p);
      const x = document.createElement('button');
      x.type = 'button';
      x.className = 'chip-act';
      x.textContent = glyph;
      x.disabled = kind === 'kept' && keptCount <= 1;
      x.title = `${verb} page ${p + 1}`;
      x.setAttribute('aria-label', x.title);
      x.onclick = () => changePages(kind, [p]);
      chip.append(go, x);
      chips.appendChild(chip);
    }
    d.appendChild(chips);
    markCurrentPage();
  };
  d.addEventListener('toggle', fill);
  // Stay open when this run is (part of) a run that was open before the lists were rebuilt.
  d.open = openRuns[kind].some(([a, b]) => a <= run[0] && run[1] <= b);
  fill();
  li.appendChild(d);
  return li;
}

function renderPageLists() {
  const count = pageCount();
  const removed = [...state.removedPages].sort((x, y) => x - y);
  const key = `${count}:${removed.join(',')}`;
  if (key !== listsKey) {
    listsKey = key;
    const kept = keptPages();
    const hadFocus = document.activeElement?.closest('.page-list');
    for (const kind of ['removed', 'kept']) {
      const ul = $(`${kind}Runs`);
      openRuns[kind] = [...ul.querySelectorAll(':scope > li > details[open]')]
        .map((d) => [Number(d.parentNode.dataset.first), Number(d.parentNode.dataset.last)]);
      ul.textContent = '';
      for (const run of pageRuns(kind === 'removed' ? removed : kept)) ul.appendChild(runEl(kind, run, kept.length));
    }
    $('removedList').hidden = removed.length === 0;
    $('removedCount').textContent = removed.length;
    $('keptCount').textContent = removed.length ? kept.length : `all ${kept.length}`;
    // The button that was clicked is gone now; keep keyboard focus in the same list.
    if (hadFocus && !hadFocus.contains(document.activeElement)) {
      (hadFocus.hidden ? $('keptList') : hadFocus).querySelector('summary').focus();
    }
  }
  markCurrentPage();
}

/** Highlight the page on screen in both lists. */
function markCurrentPage() {
  for (const li of document.querySelectorAll('.page-list .run')) {
    li.classList.toggle('current', Number(li.dataset.first) <= state.page && state.page <= Number(li.dataset.last));
  }
  for (const chip of document.querySelectorAll('.page-list .chip')) {
    chip.classList.toggle('current', Number(chip.dataset.page) === state.page);
  }
}

// ---------- page thumbnails ----------
// One button per page of the original PDF. Images are rendered only once a thumbnail scrolls near
// view, a couple at a time so the main preview stays quick, and kept as PNGs rather than canvases
// so a long document does not hold hundreds of bitmaps.
const THUMB_PX = 108; // rendered width in CSS pixels
const thumbs = { gen: 0, els: [], urls: [], queue: [], running: 0, observer: null };

function buildThumbs() {
  const nav = $('thumbs');
  thumbs.gen++;
  thumbs.observer?.disconnect();
  for (const u of thumbs.urls) if (u) URL.revokeObjectURL(u);
  Object.assign(thumbs, { els: [], urls: [], queue: [], running: 0 });
  nav.textContent = '';
  thumbs.observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      thumbs.observer.unobserve(e.target);
      thumbs.queue.push(Number(e.target.dataset.page));
    }
    pumpThumbs();
  }, { root: nav, rootMargin: '400px' });
  state.analysis.pages.forEach((p, i) => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'thumb';
    b.dataset.page = i;
    b.title = `Go to page ${i + 1}`;
    const box = document.createElement('span');
    box.className = 'thumb-img';
    box.style.aspectRatio = `${p.width || 612} / ${p.height || 792}`;
    const num = document.createElement('span');
    num.className = 'thumb-num';
    num.textContent = i + 1;
    b.append(box, num);
    b.onclick = () => showPage(i);
    nav.appendChild(b);
    thumbs.els.push(b);
    thumbs.observer.observe(b);
  });
}

function pumpThumbs() {
  while (thumbs.running < 2 && thumbs.queue.length) {
    const i = thumbs.queue.shift();
    const gen = thumbs.gen;
    thumbs.running++;
    renderThumb(i, gen)
      .catch((err) => console.warn(`Thumbnail ${i + 1}:`, err))
      .finally(() => { if (gen === thumbs.gen) { thumbs.running--; pumpThumbs(); } });
  }
}

async function renderThumb(i, gen) {
  const page = await state.origDoc.getPage(i + 1);
  if (gen !== thumbs.gen) return;
  const base = page.getViewport({ scale: 1 });
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  const vp = page.getViewport({ scale: (THUMB_PX * dpr) / base.width });
  const canvas = document.createElement('canvas');
  canvas.width = Math.ceil(vp.width);
  canvas.height = Math.ceil(vp.height);
  await page.render({ canvasContext: canvas.getContext('2d'), viewport: vp }).promise;
  const blob = await new Promise((resolve) => canvas.toBlob(resolve));
  if (gen !== thumbs.gen || !blob) return;
  const url = URL.createObjectURL(blob);
  thumbs.urls[i] = url;
  const img = new Image();
  img.alt = '';
  img.src = url;
  const box = thumbs.els[i].firstChild;
  box.style.aspectRatio = `${base.width} / ${base.height}`; // the real shape, rotation included
  box.appendChild(img);
}

/** Highlight the current page, mark removed ones, and keep the current one in view. */
function markThumbs() {
  const nav = $('thumbs');
  thumbs.els.forEach((b, i) => {
    const removed = state.removedPages.has(i);
    b.classList.toggle('removed', removed);
    b.title = `Go to page ${i + 1}${removed ? ' (removed from the download)' : ''}`;
    if (i === state.page) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
  const cur = thumbs.els[state.page];
  if (!cur || nav.offsetParent === null) return;
  // Scroll only the rail, along whichever axis it runs (a row on narrow screens).
  const n = nav.getBoundingClientRect();
  const c = cur.getBoundingClientRect();
  const pad = 12;
  if (c.top < n.top + pad) nav.scrollTop += c.top - n.top - pad;
  else if (c.bottom > n.bottom - pad) nav.scrollTop += c.bottom - n.bottom + pad;
  if (c.left < n.left + pad) nav.scrollLeft += c.left - n.left - pad;
  else if (c.right > n.right - pad) nav.scrollLeft += c.right - n.right + pad;
}

// ---------- pages & rendering ----------
async function showPage(i) {
  const count = state.analysis.pages.length;
  state.page = Math.max(0, Math.min(count - 1, i));
  state.stack = null;
  if (state.selected && !state.selected.startsWith(`${state.page}:`)) state.selected = null;
  if (state.multi.length && !state.multi[0].startsWith(`${state.page}:`)) { state.multi = []; state.areas = []; }
  $('pageInput').value = state.page + 1;
  $('pageInput').style.width = `${String(count).length + 1.5}ch`;
  $('pageCount').textContent = count;
  $('prevBtn').disabled = state.page === 0;
  $('nextBtn').disabled = state.page === count - 1;
  $('scanBadge').hidden = $('scanNote').hidden = !pageData().scan;
  updatePagesUi();
  renderSidebar();
  await Promise.all([renderSide('before'), renderSide('after')]);
}

$('prevBtn').onclick = () => showPage(state.page - 1);
$('nextBtn').onclick = () => showPage(state.page + 1);

// Page number box: type a number and press Enter (or leave the box) to jump there.
function jumpToTypedPage() {
  const input = $('pageInput');
  const n = parseInt(input.value, 10);
  const target = Math.max(0, Math.min(state.analysis.pages.length - 1, n - 1));
  if (Number.isFinite(n) && target !== state.page) showPage(target);
  else input.value = state.page + 1;
}
$('pageInput').addEventListener('focus', (e) => e.target.select());
$('pageInput').addEventListener('change', jumpToTypedPage);
$('pageInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') { jumpToTypedPage(); e.target.select(); }
  else if (e.key === 'Escape') { e.target.value = state.page + 1; e.target.blur(); }
  else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    e.preventDefault();
    showPage(state.page + (e.key === 'ArrowUp' ? 1 : -1)).then(() => e.target.select());
  }
});

document.querySelectorAll('.seg button[data-view]').forEach((b) => {
  b.onclick = () => {
    state.view = b.dataset.view;
    document.querySelectorAll('.seg button[data-view]').forEach((x) => x.classList.toggle('on', x === b));
    $('panes').dataset.view = state.view;
    renderSide('before');
    renderSide('after');
  };
});
$('markersChk').onchange = (e) => { state.markers = e.target.checked; drawOverlays(); };

function setTool(tool) {
  state.tool = tool;
  state.drag = null;
  document.querySelectorAll('.seg button[data-tool]').forEach((x) => x.classList.toggle('on', x.dataset.tool === tool));
  for (const side of ['before', 'after']) $(`${side}Overlay`).classList.toggle('area', tool === 'area');
  $('includeTextLabel').hidden = tool !== 'area';
  drawOverlays();
}
document.querySelectorAll('.seg button[data-tool]').forEach((b) => { b.onclick = () => setTool(b.dataset.tool); });
$('includeTextChk').onchange = (e) => {
  state.includeText = e.target.checked;
  if (state.areas.length) applyAreaSelection();
};

// Re-render on width changes only: the panes' height follows the rendered sheets, so reacting to it
// would re-render after every render.
let resizeTimer;
let panesWidth = 0;
new ResizeObserver(([entry]) => {
  const width = Math.round(entry.contentRect.width);
  if (width === panesWidth) return;
  panesWidth = width;
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { if (state.analysis) { renderSide('before'); renderSide('after'); } }, 120);
}).observe($('panes'));

async function renderSide(side) {
  let doc = side === 'before' ? state.origDoc : state.editedDoc;
  let index = state.page;
  // In the after pane a removed page shows a placeholder. Until a fresh edited PDF arrives, a page
  // that was just put back has no counterpart in editedDoc, so it shows blank instead of a wrong page.
  const removed = side === 'after' && state.removedPages.has(state.page);
  let blank = removed;
  if (side === 'after') {
    $('afterSheet').classList.toggle('removed', removed);
    $('removedNote').hidden = !removed;
    index = blank ? -1 : outputIndex(state.page, state.editedRemoved);
    if (index < 0) { blank = true; doc = state.origDoc; index = state.page; }
  }
  const pane = $(`${side}Pane`);
  if (!doc || pane.offsetParent === null) return;
  const canvas = $(`${side}Canvas`);
  const page = await doc.getPage(index + 1);
  const base = page.getViewport({ scale: 1 });
  const sheet = canvas.parentElement;
  const maxW = pane.clientWidth - 2;
  const maxH = Math.max(320, window.innerHeight - sheet.getBoundingClientRect().top - 40);
  const scale = Math.min(maxW / base.width, maxH / base.height);
  const sheetVp = page.getViewport({ scale }); // size of the sheet on screen
  // With 1 page per sheet and margins or a scale, the after pane shows the page placed as downloaded.
  const inset = side === 'after' && state.perSheet === 1 && altersPage(state.margins, zoom())
    ? fitInCell(sheetLayout(base.width, base.height, 1, marginPoints()).cells[0], base.width, base.height, zoom()) : null;
  const vp = inset
    ? page.getViewport({ scale: scale * inset.scale, offsetX: inset.x * scale, offsetY: (base.height - inset.y - base.height * inset.scale) * scale })
    : sheetVp;
  const dpr = window.devicePixelRatio || 1;
  // Faint outline of the placed page, so the margin shows even on a white page.
  const outline = (ctx) => {
    if (!inset) return;
    ctx.save();
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.strokeStyle = 'rgba(36, 86, 214, 0.45)';
    ctx.setLineDash([4, 3]);
    ctx.lineWidth = 1;
    ctx.strokeRect(Math.round(vp.offsetX) + 0.5, Math.round(vp.offsetY) + 0.5, Math.round(vp.width) - 1, Math.round(vp.height) - 1);
    ctx.restore();
  };

  renderTasks[side]?.cancel();
  if (blank) {
    renderTasks[side] = null;
    canvas.width = Math.floor(sheetVp.width * dpr); // also clears it
    canvas.height = Math.floor(sheetVp.height * dpr);
    canvas.style.width = sheet.style.width = `${sheetVp.width}px`;
    canvas.style.height = sheet.style.height = `${sheetVp.height}px`;
    if (!removed) outline(canvas.getContext('2d'));
    viewports[side] = vp;
    drawOverlay(side);
    return;
  }
  const off = document.createElement('canvas');
  off.width = Math.floor(sheetVp.width * dpr);
  off.height = Math.floor(sheetVp.height * dpr);
  const task = page.render({ canvasContext: off.getContext('2d'), viewport: vp, transform: dpr !== 1 ? [dpr, 0, 0, dpr, 0, 0] : null });
  renderTasks[side] = task;
  try {
    await task.promise;
  } catch (err) {
    if (err?.name === 'RenderingCancelledException') return;
    throw err;
  }
  // Swap in the finished frame so the preview never flashes blank.
  canvas.width = off.width;
  canvas.height = off.height;
  outline(off.getContext('2d'));
  canvas.getContext('2d').drawImage(off, 0, 0);
  canvas.style.width = sheet.style.width = `${sheetVp.width}px`;
  canvas.style.height = sheet.style.height = `${sheetVp.height}px`;
  viewports[side] = vp;
  drawOverlay(side);
}

// ---------- overlays ----------
function rectFor(side, o) {
  const vp = viewports[side];
  if (!vp || !o.bounds) return null;
  const [x1, y1, x2, y2] = vp.convertToViewportRectangle(o.bounds);
  return { left: Math.min(x1, x2), top: Math.min(y1, y2), width: Math.abs(x2 - x1), height: Math.abs(y2 - y1) };
}

function drawOverlays() { drawOverlay('before'); drawOverlay('after'); }

function drawOverlay(side) {
  const layer = $(`${side}Overlay`);
  layer.textContent = '';
  if (!state.analysis || !viewports[side]) return;
  const page = pageData();
  const shown = new Set();
  const add = (o, cls) => {
    const r = rectFor(side, o);
    if (!r) return;
    const box = document.createElement('div');
    box.className = `box ${cls}`;
    Object.assign(box.style, { left: `${r.left - 1}px`, top: `${r.top - 1}px`, width: `${r.width + 2}px`, height: `${r.height + 2}px` });
    layer.appendChild(box);
  };
  if (state.markers && side === 'before') {
    for (const o of page.objects) {
      const a = actionOf(o.id);
      if (a !== 'keep') { add(o, `act-${a}`); shown.add(o.id); }
      else if (o.role === 'background' || o.role === 'lightArt') add(o, 'candidate');
    }
  }
  const hov = !state.drag?.active && state.hover && page.byId.get(state.hover);
  if (hov) add(hov, 'hover');
  for (const id of state.multi) {
    const o = page.byId.get(id);
    if (o) add(o, 'multi');
  }
  const sel = state.selected && page.byId.get(state.selected);
  if (sel) add(sel, 'selected');
  const d = state.drag;
  if (d?.active) {
    for (const o of state.dragHits) add(o, 'preview');
    if (d.side === side) {
      const m = document.createElement('div');
      m.className = 'marquee';
      Object.assign(m.style, {
        left: `${Math.min(d.x0, d.x1)}px`, top: `${Math.min(d.y0, d.y1)}px`,
        width: `${Math.abs(d.x1 - d.x0)}px`, height: `${Math.abs(d.y1 - d.y0)}px`,
      });
      layer.appendChild(m);
    }
  }
}

function localPoint(side, ev) {
  const layer = $(`${side}Overlay`);
  const rect = layer.getBoundingClientRect();
  const clamp = (v, max) => Math.max(0, Math.min(max, v));
  return { x: clamp(ev.clientX - rect.left, rect.width), y: clamp(ev.clientY - rect.top, rect.height) };
}

function hitTest(side, ev) {
  const vp = viewports[side];
  const { x, y } = localPoint(side, ev);
  const [px, py] = vp.convertToPdfPoint(x, y);
  const pad = 3 / vp.scale;
  const ids = pageData().objects
    .filter((o) => o.bounds && o.type !== 'form' && px >= o.bounds[0] - pad && px <= o.bounds[2] + pad && py >= o.bounds[1] - pad && py <= o.bounds[3] + pad)
    .sort((a, b) => b.order - a.order)
    .map((o) => o.id);
  return { x, y, ids };
}

// ---------- area selection ----------
const DRAG_THRESHOLD = 4; // px of movement before a press becomes a rectangle instead of a click

/** A drag in viewport pixels, as a rectangle in PDF points. */
function dragRect(d) {
  const vp = viewports[d.side];
  return [...vp.convertToPdfPoint(d.x0, d.y0), ...vp.convertToPdfPoint(d.x1, d.y1)];
}

function areaObjects(rects) {
  const page = pageData();
  const tolerance = 2 / (viewports.before?.scale || viewports.after?.scale || 1);
  const found = new Map();
  for (const r of rects) {
    for (const o of objectsInRect(page, r, { includeText: state.includeText, tolerance })) found.set(o.id, o);
  }
  return [...found.values()].sort((a, b) => b.order - a.order);
}

/** Select whatever lies inside state.areas. */
function applyAreaSelection() {
  const ids = areaObjects(state.areas).map((o) => o.id);
  state.stack = null;
  state.selected = ids.length === 1 ? ids[0] : null;
  state.multi = ids.length > 1 ? ids : [];
  renderSidebar();
  drawOverlays();
}

let swallowClick = false;

for (const side of ['before', 'after']) {
  const layer = $(`${side}Overlay`);
  layer.addEventListener('pointerdown', (ev) => {
    if (state.tool !== 'area' || ev.button !== 0 || !viewports[side]) return;
    const { x, y } = localPoint(side, ev);
    state.drag = { side, x0: x, y0: y, x1: x, y1: y, add: ev.shiftKey, active: false };
    layer.setPointerCapture(ev.pointerId);
    ev.preventDefault(); // no text selection or image drag while drawing
    document.activeElement?.blur(); // ...but still move focus off toolbar controls so keys work

  });
  layer.addEventListener('pointermove', (ev) => {
    const d = state.drag;
    if (!d || d.side !== side) return;
    const { x, y } = localPoint(side, ev);
    d.x1 = x;
    d.y1 = y;
    if (!d.active && Math.hypot(d.x1 - d.x0, d.y1 - d.y0) >= DRAG_THRESHOLD) d.active = true;
    if (!d.active) return;
    state.hover = null;
    state.dragHits = areaObjects([...(d.add ? state.areas : []), dragRect(d)]);
    drawOverlays();
  });
  const endDrag = (commit) => {
    const d = state.drag;
    if (!d || d.side !== side) return;
    state.drag = null;
    state.dragHits = [];
    if (!d.active) return; // a plain click: let the click handler pick one element
    swallowClick = true;
    setTimeout(() => { swallowClick = false; }, 0);
    if (!commit) { drawOverlays(); return; }
    state.areas = [...(d.add ? state.areas : []), dragRect(d)];
    applyAreaSelection();
  };
  layer.addEventListener('pointerup', () => endDrag(true));
  layer.addEventListener('pointercancel', () => endDrag(false));

  layer.addEventListener('click', (ev) => {
    if (swallowClick) { swallowClick = false; return; }
    const hit = hitTest(side, ev);
    if (!hit.ids.length) { select(null); return; }
    const s = state.stack;
    const same = s && Math.hypot(s.x - hit.x, s.y - hit.y) < 5 && s.ids.join() === hit.ids.join();
    const index = same ? (s.index + 1) % hit.ids.length : 0;
    state.stack = { ...hit, index };
    select(hit.ids[index], { keepStack: true });
  });
  layer.addEventListener('mousemove', (ev) => {
    if (state.drag?.active) return;
    const hit = hitTest(side, ev);
    const id = hit.ids[0] || null;
    if (id !== state.hover) { state.hover = id; drawOverlays(); }
  });
  layer.addEventListener('mouseleave', () => { state.hover = null; drawOverlays(); });
}

function select(id, { keepStack = false, scroll = true } = {}) {
  state.selected = id;
  state.multi = [];
  state.areas = [];
  if (!keepStack) state.stack = null;
  renderSidebar();
  drawOverlays();
  if (id && scroll) $('inspector').scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

// ---------- sidebar ----------
const GROUPS = [
  { key: 'background', title: 'Backgrounds', note: 'Shapes and pictures behind text. “Possible” ones are left on until you choose.' },
  { key: 'image', title: 'Pictures' },
  { key: 'lightText', title: 'Light text on dark backgrounds', note: 'Turned black when the dark area behind it goes away.' },
  { key: 'lightArt', title: 'Pale lines and shapes', note: 'Turned black when the dark area behind them goes away. Ones you keep disappear once that backdrop is gone.' },
  { key: 'scan', title: 'Scanned page image' },
];

function renderSidebar() {
  if (!state.analysis) return;
  renderInspector();
  const page = pageData();
  const groups = $('groups');
  groups.textContent = '';

  const rolesShown = new Set();
  for (const g of GROUPS) {
    const items = page.objects.filter((o) => o.role === g.key);
    if (!items.length) continue;
    items.forEach((o) => rolesShown.add(o.id));
    groups.appendChild(groupEl(g.title, g.note, items, true));
  }
  const mine = page.objects.filter((o) => !rolesShown.has(o.id) && state.overrides[o.id]);
  if (mine.length) groups.appendChild(groupEl('Other things you changed', null, mine, true));
  if (!groups.children.length) {
    const p = document.createElement('p');
    p.className = 'empty';
    p.textContent = 'Nothing on this page needs cleaning up. You can still click any element to change it.';
    groups.appendChild(p);
  }
  const rest = page.objects.filter((o) => o.type !== 'form' && !rolesShown.has(o.id) && !state.overrides[o.id]);
  if (rest.length) {
    const h = document.createElement('h3');
    h.className = 'subhead';
    h.textContent = `Everything else (${rest.length})`;
    groups.appendChild(h);
    for (const k of KINDS) {
      const items = rest.filter((o) => kindOf(o) === k.key);
      if (items.length) groups.appendChild(groupEl(k.title, null, items.slice(0, 400), false, items));
    }
  }
}

/** Kinds used to split "Everything else", so text is not mixed in with shapes. */
const KINDS = [
  { key: 'text', title: 'Text' },
  { key: 'fill', title: 'Filled shapes' },
  { key: 'line', title: 'Lines' },
  { key: 'image', title: 'Pictures' },
  { key: 'shading', title: 'Gradients' },
  { key: 'other', title: 'Other' },
];

function kindOf(o) {
  if (o.type === 'path') return o.fill && o.fill.a > 0 ? 'fill' : 'line';
  return ['text', 'image', 'shading'].includes(o.type) ? o.type : 'other';
}

/** `all` is what "Apply to all" changes; it can be longer than the (capped) list that is shown. */
function groupEl(title, note, items, open, all = items) {
  const d = document.createElement('details');
  d.className = 'group';
  d.open = open;
  const s = document.createElement('summary');
  s.innerHTML = `<span></span><span class="count">${items.length}</span>`;
  s.firstChild.textContent = title;
  d.appendChild(s);
  if (note) {
    const n = document.createElement('p');
    n.className = 'note';
    n.textContent = note;
    d.appendChild(n);
  }
  if (all.length > 1) d.appendChild(applyAllEl(all));
  const ul = document.createElement('ul');
  for (const o of items) ul.appendChild(rowEl(o));
  d.appendChild(ul);
  return d;
}

/** One dropdown that sets the same action on every element of a group. */
function applyAllEl(objs) {
  const row = document.createElement('div');
  row.className = 'apply-all';
  const label = document.createElement('span');
  label.textContent = `Apply to all ${objs.length}`;
  row.appendChild(label);

  const sel = document.createElement('select');
  sel.setAttribute('aria-label', `Action for all ${objs.length} elements in this group`);
  const current = actionOf(objs[0].id);
  const same = objs.every((o) => actionOf(o.id) === current);
  if (!same) {
    const mixed = document.createElement('option');
    mixed.value = '';
    mixed.textContent = 'Mixed';
    mixed.disabled = true;
    sel.appendChild(mixed);
  }
  for (const a of ['keep', 'remove', 'white', 'black']) {
    const fits = objs.filter((o) => allowedActions(o).includes(a)).length;
    if (!fits) continue;
    const opt = document.createElement('option');
    opt.value = a;
    opt.textContent = ACTION_LABELS[a] + (fits < objs.length ? ` (${fits})` : '');
    if (fits < objs.length) opt.title = `Applies to the ${fits} elements that support it`;
    sel.appendChild(opt);
  }
  sel.value = same ? current : '';
  sel.className = `act act-${sel.value || 'mixed'}`;
  sel.onchange = () => setActions(objs.map((o) => o.id), sel.value);
  row.appendChild(sel);
  return row;
}

function swatchFor(o) {
  const c = o.type === 'text' || !o.fill ? inkColor(o) : o.fill;
  const sw = document.createElement('span');
  sw.className = `swatch t-${o.type}`;
  if (c && o.type !== 'image') sw.style.background = hex(c);
  return sw;
}

function rowEl(o) {
  const li = document.createElement('li');
  li.className = 'row' + (o.id === state.selected || state.multi.includes(o.id) ? ' sel' : '');
  li.appendChild(swatchFor(o));
  const label = document.createElement('span');
  label.className = 'label';
  label.textContent = describe(o);
  label.title = o.text || describe(o);
  li.appendChild(label);

  const tags = document.createElement('span');
  tags.className = 'tags';
  if (o.role === 'background' && o.confidence === 'low') tags.appendChild(tag('Possible'));
  if (state.overrides[o.id]) tags.appendChild(tag('Your choice', 'mine'));
  if (willVanish(o)) tags.appendChild(tag('Will vanish', 'warn'));
  li.appendChild(tags);

  li.appendChild(actionSelect(o));
  li.onmouseenter = () => { state.hover = o.id; drawOverlays(); };
  li.onmouseleave = () => { state.hover = null; drawOverlays(); };
  li.onclick = (e) => { if (e.target.tagName !== 'SELECT') select(o.id, { scroll: false }); };
  return li;
}

function tag(text, cls = '') {
  const t = document.createElement('span');
  t.className = `tag ${cls}`;
  t.textContent = text;
  return t;
}

function actionSelect(o) {
  const sel = document.createElement('select');
  sel.setAttribute('aria-label', `Action for ${describe(o)}`);
  for (const a of allowedActions(o)) {
    const opt = document.createElement('option');
    opt.value = a;
    opt.textContent = ACTION_LABELS[a];
    sel.appendChild(opt);
  }
  sel.value = actionOf(o.id);
  sel.className = `act act-${sel.value}`;
  sel.onchange = () => setAction(o.id, sel.value);
  return sel;
}

/** Pale things that stay pale while the dark area behind them is removed. */
function willVanish(o) {
  if (o.role !== 'lightArt' && o.role !== 'lightText') return false;
  if (actionOf(o.id) !== 'keep') return false;
  const page = state.analysis.pages[o.page];
  return backdropTurnsLight(o, page.byId, actionOf);
}

function renderInspector() {
  const box = $('inspector');
  const page = pageData();
  if (state.multi.length) { renderMultiInspector(box, state.multi.map((id) => page.byId.get(id)).filter(Boolean)); return; }
  const o = state.selected && page.byId.get(state.selected);
  if (!o) { box.hidden = true; return; }
  box.hidden = false;
  box.textContent = '';

  const head = document.createElement('div');
  head.className = 'insp-head';
  head.appendChild(swatchFor(o));
  const title = document.createElement('div');
  title.className = 'insp-title';
  title.textContent = describe(o);
  head.appendChild(title);
  const close = document.createElement('button');
  close.className = 'icon-btn';
  close.setAttribute('aria-label', 'Deselect');
  close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  close.onclick = () => select(null);
  head.appendChild(close);
  box.appendChild(head);

  const meta = document.createElement('p');
  meta.className = 'insp-meta';
  const bits = [{ text: 'Text', path: 'Vector shape', image: 'Raster picture', shading: 'Gradient', form: 'Group' }[o.type] || 'Object'];
  const c = inkColor(o);
  if (c) bits.push(`color ${hex(c)}`);
  const roleName = { background: 'detected as background', image: 'picture', lightText: 'light text', lightArt: 'pale line art', scan: 'scanned page' }[o.role];
  if (roleName) bits.push(roleName + (o.confidence === 'low' ? ' (possible)' : ''));
  if (o.parent) bits.push('inside a group');
  meta.textContent = bits.join(' · ');
  box.appendChild(meta);

  const seg = document.createElement('div');
  seg.className = 'actions';
  const current = actionOf(o.id);
  for (const a of allowedActions(o)) {
    const b = document.createElement('button');
    b.className = `btn small${a === current ? ' on' : ''}`;
    b.textContent = ACTION_LABELS[a];
    b.onclick = () => setAction(o.id, a);
    seg.appendChild(b);
  }
  box.appendChild(seg);

  const foot = document.createElement('div');
  foot.className = 'insp-foot';
  if (state.overrides[o.id]) {
    const auto = state.auto[o.id] || 'keep';
    const r = document.createElement('button');
    r.className = 'link';
    r.textContent = `Back to automatic (${ACTION_LABELS[auto].toLowerCase()})`;
    r.onclick = () => { delete state.overrides[o.id]; recompute(); };
    foot.appendChild(r);
  }
  if (o.parent) {
    const p = document.createElement('button');
    p.className = 'link';
    p.textContent = 'Select the whole group';
    p.onclick = () => select(o.parent);
    foot.appendChild(p);
  }
  const s = state.stack;
  if (s && s.ids.length > 1 && s.ids.includes(o.id)) {
    const n = document.createElement('span');
    n.className = 'stack';
    n.textContent = `${s.ids.indexOf(o.id) + 1} of ${s.ids.length} stacked here · click again to go deeper`;
    foot.appendChild(n);
  }
  if (foot.children.length) box.appendChild(foot);
}

const TYPE_NAMES = {
  text: ['text', 'texts'], path: ['shape', 'shapes'], image: ['picture', 'pictures'], shading: ['gradient', 'gradients'],
};

function renderMultiInspector(box, objs) {
  box.hidden = false;
  box.textContent = '';
  const ids = objs.map((o) => o.id);

  const head = document.createElement('div');
  head.className = 'insp-head';
  const title = document.createElement('div');
  title.className = 'insp-title';
  title.textContent = `${objs.length} elements selected`;
  head.appendChild(title);
  const close = document.createElement('button');
  close.className = 'icon-btn';
  close.setAttribute('aria-label', 'Deselect');
  close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M18 6 6 18M6 6l12 12"/></svg>';
  close.onclick = () => select(null);
  head.appendChild(close);
  box.appendChild(head);

  const counts = {};
  for (const o of objs) counts[o.type] = (counts[o.type] || 0) + 1;
  const bits = Object.entries(counts).map(([t, n]) => {
    const [one, many] = TYPE_NAMES[t] || ['object', 'objects'];
    return `${n} ${n === 1 ? one : many}`;
  });
  if (!state.includeText && state.areas.length) bits.push('text left out');
  const meta = document.createElement('p');
  meta.className = 'insp-meta';
  meta.textContent = bits.join(' · ');
  box.appendChild(meta);

  const seg = document.createElement('div');
  seg.className = 'actions';
  for (const a of ['keep', 'remove', 'white', 'black']) {
    const fits = objs.filter((o) => allowedActions(o).includes(a));
    if (!fits.length) continue;
    const b = document.createElement('button');
    const all = objs.every((o) => actionOf(o.id) === a);
    b.className = `btn small${all ? ' on' : ''}`;
    b.textContent = ACTION_LABELS[a] + (fits.length < objs.length ? ` (${fits.length})` : '');
    if (fits.length < objs.length) b.title = `Applies to the ${fits.length} selected elements that support it`;
    b.onclick = () => setActions(ids, a);
    seg.appendChild(b);
  }
  box.appendChild(seg);

  const foot = document.createElement('div');
  foot.className = 'insp-foot';
  const mine = ids.filter((id) => state.overrides[id]);
  if (mine.length) {
    const r = document.createElement('button');
    r.className = 'link';
    r.textContent = `Back to automatic (${mine.length} of your choices)`;
    r.onclick = () => { for (const id of mine) delete state.overrides[id]; recompute(); };
    foot.appendChild(r);
  }
  const n = document.createElement('span');
  n.className = 'stack';
  n.textContent = 'Drag again to replace · Shift+drag to add more';
  foot.appendChild(n);
  box.appendChild(foot);
}

// ---------- keyboard ----------
document.addEventListener('keydown', (e) => {
  if (!state.analysis || $('workspace').hidden || $('combineDialog').open) return;
  const t = e.target;
  if (t.tagName === 'SELECT' || t.tagName === 'TEXTAREA' || (t.tagName === 'INPUT' && t.type !== 'checkbox')) return;
  if (e.key === 'ArrowLeft') { showPage(state.page - 1); return; }
  if (e.key === 'ArrowRight') { showPage(state.page + 1); return; }
  if (e.key === 'Escape') { select(null); return; }
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  if (e.key.toLowerCase() === 'g') { e.preventDefault(); $('pageInput').focus(); return; }
  if (e.key.toLowerCase() === 'r') { setTool(state.tool === 'area' ? 'pick' : 'area'); return; }
  if (e.key.toLowerCase() === 'x') { toggleCurrentPage(); return; }
  const page = pageData();
  const objs = selectedIds().map((id) => page.byId.get(id)).filter(Boolean);
  const map = { Delete: 'remove', Backspace: 'remove', b: 'black', w: 'white', k: 'keep' };
  const a = map[e.key.length === 1 ? e.key.toLowerCase() : e.key];
  if (a && objs.some((o) => allowedActions(o).includes(a))) { e.preventDefault(); setActions(objs.map((o) => o.id), a); }
});
