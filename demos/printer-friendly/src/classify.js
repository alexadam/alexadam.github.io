// Heuristics that decide which page objects are backgrounds, pictures or
// light-coloured text, and which edit each one gets by default.
// Pure functions: no DOM, no PDFium, so they run in tests and in the browser.

export const DEFAULT_TOGGLES = { images: true, backgrounds: true, text: true };

const FULL_PAGE = 0.5; // share of the page an object must cover to count as a page background
const BANNER_WIDTH = 0.4; // share of the page width for a filled box behind text to count as a banner
const SCAN_COVER = 0.85;
const LIGHT = 0.6; // relative luminance above which text or line art is too pale to print well
const NEAR_WHITE = 0.92;

export function luminance(c) {
  if (!c) return 1;
  const lin = (v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * lin(c.r) + 0.7152 * lin(c.g) + 0.0722 * lin(c.b);
}

const area = (b) => (b ? Math.max(0, b[2] - b[0]) * Math.max(0, b[3] - b[1]) : 0);

function clip(b, w, h) {
  return [Math.max(b[0], 0), Math.max(b[1], 0), Math.min(b[2], w), Math.min(b[3], h)];
}

function overlap(a, b) {
  return area([Math.max(a[0], b[0]), Math.max(a[1], b[1]), Math.min(a[2], b[2]), Math.min(a[3], b[3])]);
}

const isPainter = (o) => o.bounds && (o.type === 'image' || o.type === 'shading' || (o.type === 'path' && o.fill && o.fill.a > 0));

/** The colour an object is drawn in, for text and line art. */
export function inkColor(o) {
  return o.fill && o.fill.a > 0 ? o.fill : o.stroke && o.stroke.a > 0 ? o.stroke : null;
}

/**
 * Annotate each page's objects in place:
 *   o.role       'background' | 'image' | 'scan' | 'lightText' | 'lightArt' | undefined
 *   o.confidence 'high' | 'low' (backgrounds only; low ones are listed but not auto-selected)
 *   o.under      ids of filled objects underneath, topmost first
 *   page.scan    true when the page looks like a scanned image
 */
export function classify(analysis) {
  for (const page of analysis.pages) classifyPage(page);
  return analysis;
}

function classifyPage(page) {
  const { width: w, height: h, objects } = page;
  const pageArea = w * h || 1;
  const cover = (o) => (o.bounds ? area(clip(o.bounds, w, h)) / pageArea : 0);
  const painters = objects.filter(isPainter);
  const visibleText = objects.filter((o) => o.type === 'text' && o.renderMode !== 3 && o.renderMode !== 7);

  // Filled objects lying underneath o (earlier in paint order, covering most of it), topmost first.
  const underOf = (o) => {
    const a = area(o.bounds) || 1;
    const ids = [];
    for (let i = painters.length - 1; i >= 0; i--) {
      const p = painters[i];
      if (p.order >= o.order || p === o) continue;
      if (overlap(p.bounds, o.bounds) / a >= 0.6) ids.push(p.id);
    }
    return ids;
  };

  // Scans: a near page-sized picture with no visible text drawn over it.
  const bigImages = objects.filter((o) => o.type === 'image' && cover(o) >= SCAN_COVER);
  page.scan = bigImages.length > 0 && visibleText.length === 0;

  for (const o of objects) {
    o.under = [];
    if (!o.bounds) continue;
    if (o.type === 'text' || o.type === 'path') o.under = underOf(o);
  }

  // Everything stacked under visible text counts as its backdrop, not just the topmost layer: removing a
  // background picture exposes whatever lies beneath it (e.g. a dark box under a semi-transparent texture).
  // An opaque light box stops the walk, since it hides anything below it around the text.
  const painterById = new Map(painters.map((p) => [p.id, p]));
  const backdropOfText = new Set();
  for (const t of visibleText) {
    for (const id of t.under) {
      backdropOfText.add(id);
      const p = painterById.get(id);
      if (p.type === 'path' && p.fill.a === 255 && luminance(p.fill) >= LIGHT) break;
    }
  }

  for (const o of objects) {
    if (o.type === 'image') {
      if (page.scan && cover(o) >= SCAN_COVER) o.role = 'scan';
      else if (cover(o) >= FULL_PAGE) { o.role = 'background'; o.confidence = 'high'; }
      else o.role = 'image';
    } else if (o.type === 'shading' || (o.type === 'path' && o.fill && o.fill.a > 0)) {
      const fillLum = o.type === 'shading' ? 0 : luminance(o.fill);
      if (fillLum >= NEAR_WHITE) continue; // white boxes already print fine
      const width = (Math.min(o.bounds[2], w) - Math.max(o.bounds[0], 0)) / (w || 1);
      if (cover(o) >= FULL_PAGE) { o.role = 'background'; o.confidence = 'high'; }
      else if (backdropOfText.has(o.id)) {
        o.role = 'background';
        o.confidence = width >= BANNER_WIDTH ? 'high' : 'low';
      }
    }
  }

  const byId = new Map(objects.map((o) => [o.id, o]));
  for (const o of objects) {
    if (o.role) continue;
    const ink = inkColor(o);
    if (!ink || luminance(ink) < LIGHT || !o.under.length) continue;
    // Only pale things drawn on a dark backdrop matter; pale-on-white is either hidden on purpose or already invisible.
    if (!isDark(byId.get(o.under[0]))) continue;
    if (o.type === 'text' && o.renderMode !== 3 && o.renderMode !== 7) o.role = 'lightText';
    else if (o.type === 'path') o.role = 'lightArt';
  }
  page.byId = byId;
}

function isDark(p) {
  if (!p) return false;
  if (p.type === 'image' || p.type === 'shading') return true; // assume pictures behind pale text are dark
  return luminance(p.fill) < LIGHT;
}

/**
 * Work out the edit for every object.
 * @param analysis classified analysis
 * @param toggles {images, backgrounds, text} — text also turns pale line art black
 * @param overrides {id: 'keep'|'remove'|'white'|'black'} choices the user made by hand
 * @returns {{actions: Record<string,string>, auto: Record<string,string>}}
 *   actions: final edit per id (only non-keep entries); auto: what the toggles alone would do
 */
export function resolveActions(analysis, toggles, overrides = {}) {
  const actions = {};
  const auto = {};
  for (const page of analysis.pages) {
    const { objects, byId } = page;
    for (const o of objects) {
      if (toggles.images && o.role === 'image') auto[o.id] = 'remove';
      if (toggles.backgrounds && o.role === 'background' && o.confidence === 'high') auto[o.id] = 'remove';
    }
    const pick = (o) => overrides[o.id] ?? auto[o.id] ?? 'keep';

    // Objects inside a removed form are gone too.
    const goneAncestor = (o) => {
      for (let p = o.parent && byId.get(o.parent); p; p = p.parent && byId.get(p.parent)) {
        if (pick(p) === 'remove') return true;
      }
      return false;
    };

    // Pale text and line art whose dark backdrop has been removed or whitened gets turned black.
    for (const o of objects) {
      if ((o.role !== 'lightText' && o.role !== 'lightArt') || !toggles.text) continue;
      if (backdropTurnsLight(o, byId, pick)) auto[o.id] = 'black';
    }

    for (const o of objects) {
      const a = pick(o);
      if (a !== 'keep' && !goneAncestor(o)) actions[o.id] = a;
    }
  }
  return { actions, auto };
}

/** True when everything dark under `o` has been removed or whitened by the current choices. */
export function backdropTurnsLight(o, byId, pick) {
  for (const id of o.under) {
    const p = byId.get(id);
    const a = pick(p);
    if (a === 'remove') continue;
    if (a === 'white') return true;
    return !isDark(p);
  }
  return true; // nothing left underneath: the white page shows through
}

/** Which edits make sense for an object. */
export function allowedActions(o) {
  switch (o.type) {
    case 'text': return ['keep', 'black', 'remove'];
    case 'path': return o.fill && o.fill.a > 0 ? ['keep', 'remove', 'white', 'black'] : ['keep', 'remove', 'black'];
    default: return ['keep', 'remove'];
  }
}

/**
 * Objects lying entirely inside rect ([x1, y1, x2, y2] in PDF points, any corner order).
 * Groups (form XObjects) are skipped because their children are listed on their own, and text
 * is skipped unless includeText is set. Returned topmost first.
 */
export function objectsInRect(page, rect, { includeText = true, tolerance = 0 } = {}) {
  const x1 = Math.min(rect[0], rect[2]) - tolerance;
  const x2 = Math.max(rect[0], rect[2]) + tolerance;
  const y1 = Math.min(rect[1], rect[3]) - tolerance;
  const y2 = Math.max(rect[1], rect[3]) + tolerance;
  return page.objects
    .filter((o) => o.bounds && o.type !== 'form' && (includeText || o.type !== 'text'))
    .filter(({ bounds: b }) => b[0] >= x1 && b[2] <= x2 && b[1] >= y1 && b[3] <= y2)
    .sort((a, b) => b.order - a.order);
}

export const ACTION_LABELS = { keep: 'Keep', remove: 'Remove', white: 'Fill white', black: 'Make black' };

/** Short human description of an object for lists and the inspector. */
export function describe(o) {
  const size = o.bounds ? `${Math.round(o.bounds[2] - o.bounds[0])}×${Math.round(o.bounds[3] - o.bounds[1])} pt` : '';
  switch (o.type) {
    case 'text': return o.text ? `“${o.text.length > 48 ? o.text.slice(0, 47) + '…' : o.text}”` : 'Text';
    case 'image': return `Picture ${o.pixels ? `${o.pixels[0]}×${o.pixels[1]} px` : size}`;
    case 'path': return `${o.fill && o.fill.a > 0 ? 'Filled shape' : 'Line'} ${size}`;
    case 'shading': return `Gradient ${size}`;
    case 'form': return `Group ${size}`;
    default: return `Object ${size}`;
  }
}

export function hex(c) {
  if (!c) return null;
  return '#' + [c.r, c.g, c.b].map((v) => v.toString(16).padStart(2, '0')).join('');
}
