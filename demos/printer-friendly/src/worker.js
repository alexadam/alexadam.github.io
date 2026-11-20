// Runs PDFium off the main thread. Messages: load(bytes) -> analysis, apply(edits, removedPages) -> PDF bytes,
// nUp(bytes, perSheet, margin, scale) -> PDF bytes with several pages per sheet,
// split(bytes, pagesPerFile) -> one PDF per run of pages, merge(files) -> one PDF with all their pages in order.
import { init } from '../node_modules/@embedpdf/pdfium/dist/index.browser.js';
import { PdfEngine } from './engine.js';

const WASM_URL = new URL('../node_modules/@embedpdf/pdfium/dist/pdfium.wasm', import.meta.url);

const ready = (async () => {
  const res = await fetch(WASM_URL);
  if (!res.ok) throw new Error(`Could not load PDFium (${res.status}). Did you run npm install?`);
  return PdfEngine.create(init, await res.arrayBuffer());
})();

let original = null;

self.onmessage = async ({ data }) => {
  const { id, type } = data;
  try {
    const engine = await ready;
    if (type === 'load') {
      original = new Uint8Array(data.bytes);
      self.postMessage({ id, ok: true, result: engine.analyze(original) });
    } else if (type === 'apply') {
      if (!original) throw new Error('No PDF loaded');
      const out = engine.apply(original, data.edits, data.removedPages);
      self.postMessage({ id, ok: true, result: out }, [out.buffer]);
    } else if (type === 'nUp') {
      const out = engine.nUp(new Uint8Array(data.bytes), { perSheet: data.perSheet, margin: data.margin, scale: data.scale });
      self.postMessage({ id, ok: true, result: out }, [out.buffer]);
    } else if (type === 'merge') {
      const out = engine.merge(data.files.map((b) => new Uint8Array(b)));
      self.postMessage({ id, ok: true, result: out }, [out.bytes.buffer]);
    } else if (type === 'split') {
      const parts = engine.split(new Uint8Array(data.bytes), data.pagesPerFile);
      self.postMessage({ id, ok: true, result: parts }, parts.map((b) => b.buffer));
    }
  } catch (err) {
    self.postMessage({ id, ok: false, error: err?.message || String(err) });
  }
};
