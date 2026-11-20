// Sheet layout for printing several pages on one sheet ("2-up", "4-up").
// Pure functions: sizes are PDF points (1/72 in), rectangles are [left, bottom, right, top] with y up.

export const MM = 72 / 25.4;
export const PER_SHEET = [1, 2, 4];
export const MARGINS_MM = [0, 1, 2, 3, 5, 10, 15, 20, 25];
export const DEFAULT_MARGIN_MM = 5;
export const MARGIN_LIMIT_MM = 100; // custom margins range from -100 to 100 mm
export const SIDES = ['top', 'right', 'bottom', 'left'];
export const SCALES_PCT = [50, 75, 80, 90, 95, 100, 105, 110, 125, 150];
export const SCALE_LIMIT_PCT = [10, 400]; // custom scale range, percent of the fitted size

/**
 * Margins in points as {top, right, bottom, left, gap}. Takes a number (the same on every side and
 * between pages) or an object with any of those keys. Negative values push the page past the sheet's
 * edge, where it is cut off; a negative gap makes neighbouring pages overlap.
 */
export function normalizeMargins(margin = 0) {
  if (margin == null || typeof margin === 'number') {
    const m = margin || 0;
    return { top: m, right: m, bottom: m, left: m, gap: m };
  }
  const { top = 0, right = 0, bottom = 0, left = 0, gap = 0 } = margin;
  return { top, right, bottom, left, gap };
}

/** True when the margins change a page printed alone on its sheet (the gap only matters between pages). */
export const shiftsPage = (margin) => SIDES.some((k) => normalizeMargins(margin)[k] !== 0);

/** True when a page printed alone on its sheet comes out different: it has margins or a scale other than 1. */
export const altersPage = (margin, scale = 1) => scale !== 1 || shiftsPage(margin);

/**
 * Size of the sheet and the cell each page goes into, filled left to right, then top to bottom.
 * The sheet takes the size of the first page. For 2 per sheet it is turned (portrait pages sit side by
 * side on a landscape sheet, landscape pages are stacked on a portrait one); for 4 it keeps the page's
 * orientation with a 2 × 2 grid. `margin` (points, see normalizeMargins) is the space around the edge and
 * between pages; with 1 per sheet it moves the page's edges in (or out, when negative).
 */
export function sheetLayout(pageW, pageH, perSheet, margin = 0) {
  let width = pageW, height = pageH, cols = 1, rows = 1;
  if (perSheet === 2) {
    [width, height] = [pageH, pageW];
    [cols, rows] = pageW <= pageH ? [2, 1] : [1, 2];
  } else if (perSheet === 4) {
    cols = rows = 2;
  } else if (perSheet !== 1) {
    throw new Error(`Unsupported pages per sheet: ${perSheet}`);
  }
  const mg = normalizeMargins(margin);
  // Margins can never eat the whole sheet: they take at most half of it in each direction, and negative
  // ones at most make the pages twice the sheet's size.
  const axis = (size, a, b, n) => {
    const used = a + b + mg.gap * (n - 1);
    const f = used > size / 2 ? size / 2 / used : used < -size ? -size / used : 1;
    return [a * f, b * f, mg.gap * f];
  };
  const [left, right, gapX] = axis(width, mg.left, mg.right, cols);
  const [top, bottom, gapY] = axis(height, mg.top, mg.bottom, rows);
  const cw = (width - left - right - gapX * (cols - 1)) / cols;
  const ch = (height - top - bottom - gapY * (rows - 1)) / rows;
  const cells = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const l = left + c * (cw + gapX);
      const t = height - top - r * (ch + gapY);
      cells.push([l, t - ch, l + cw, t]);
    }
  }
  return { width, height, cols, rows, margins: { top, right, bottom, left, gapX, gapY }, cells };
}

/**
 * Scale and offset that fit a w × h page into `cell`, centred, keeping its proportions. `zoom` then
 * scales the fitted page about the cell's centre: below 1 it shrinks, above 1 it grows past the cell.
 */
export function fitInCell([l, b, r, t], w, h, zoom = 1) {
  if (!(zoom > 0) || !Number.isFinite(zoom)) throw new Error(`Invalid scale: ${zoom}`);
  const scale = Math.min((r - l) / w, (t - b) / h) * zoom;
  return { scale, x: l + ((r - l) - w * scale) / 2, y: b + ((t - b) - h * scale) / 2 };
}

/** Number of sheets needed for `pages` pages. */
export const sheetCount = (pages, perSheet) => Math.ceil(pages / perSheet);
