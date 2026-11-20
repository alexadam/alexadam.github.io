// Page ranges typed by the user ("1-3, 7, 10-") and the list of pages left out of the download.
// Pure functions: page numbers shown to people are 1-based, indexes used in code are 0-based.

/**
 * Parse a page list such as "1-3, 7, 10-" or "-4 9".
 * "A-" runs to the last page, "-B" starts at the first; "5-3" is the same as "3-5".
 * @returns {{ pages: number[] } | { error: string }} sorted, unique 0-based indexes
 */
export function parsePageRanges(text, count) {
  const tokens = String(text)
    .replace(/[–—]/g, '-')
    .replace(/\s*-\s*/g, '-') // "3 - 5" is one range
    .split(/[\s,;]+/)
    .filter(Boolean);
  if (!tokens.length) return { error: 'Type page numbers, like 2, 5-8' };
  const out = new Set();
  for (const t of tokens) {
    const m = /^(\d*)(-?)(\d*)$/.exec(t);
    if (!m || t === '-' || (!m[2] && !m[1])) return { error: `“${t}” is not a page or a range` };
    let a = m[1] ? Number(m[1]) : 1;
    let b = m[2] ? (m[3] ? Number(m[3]) : count) : a;
    if (a > b) [a, b] = [b, a];
    if (a < 1) return { error: 'Pages start at 1' };
    if (b > count) return { error: `Page ${b} does not exist (this PDF has ${count} ${count === 1 ? 'page' : 'pages'})` };
    for (let i = a; i <= b; i++) out.add(i - 1);
  }
  return { pages: [...out].sort((x, y) => x - y) };
}

/** 0-based indexes -> runs of consecutive pages, as [first, last] pairs (both 0-based, inclusive). */
export function pageRuns(indexes) {
  const s = [...new Set(indexes)].sort((x, y) => x - y);
  const out = [];
  for (let i = 0; i < s.length; i++) {
    let j = i;
    while (j + 1 < s.length && s[j + 1] === s[j] + 1) j++;
    out.push([s[i], s[j]]);
    i = j;
  }
  return out;
}

/** One run -> "7" or "10–12" (1-based). */
export const formatRun = ([a, b]) => (a === b ? `${a + 1}` : `${a + 1}–${b + 1}`);

/** 0-based indexes -> "1-3, 7, 10-12" */
export function formatPageRanges(indexes) {
  return pageRuns(indexes).map(formatRun).join(', ');
}

/** Pages removed after "remove these": the current set plus `pages`. */
export function removePages(removed, pages) {
  return new Set([...removed, ...pages]);
}

/** Pages removed after "keep only these": everything outside `pages`, plus what was already removed. */
export function keepOnlyPages(removed, pages, count) {
  const keep = new Set(pages);
  const out = new Set(removed);
  for (let i = 0; i < count; i++) if (!keep.has(i)) out.add(i);
  return out;
}

/** Pages removed after putting `pages` back in the download. */
export function restorePages(removed, pages) {
  const out = new Set(removed);
  for (const p of pages) out.delete(p);
  return out;
}

/** Where original page `index` ends up in the download, or -1 when it is removed. */
export function outputIndex(index, removed) {
  if (removed.has(index)) return -1;
  let before = 0;
  for (const r of removed) if (r < index) before++;
  return index - before;
}

/**
 * Split `count` pages into files of `perFile` pages each (the last one may be shorter).
 * @returns {[number, number][]} 0-based [first, last] of each file, both inclusive
 */
export function splitRuns(count, perFile) {
  const out = [];
  for (let a = 0; a < count; a += perFile) out.push([a, Math.min(a + perFile, count) - 1]);
  return out;
}

/** File names for the pieces: "Report - part 03 of 12 (pages 21-30).pdf", numbers padded to sort in order. */
export function splitFileNames(base, runs) {
  const w = String(runs.length).length;
  return runs.map(([a, b], i) => {
    const pages = a === b ? `page ${a + 1}` : `pages ${a + 1}-${b + 1}`;
    return `${base} - part ${String(i + 1).padStart(w, '0')} of ${runs.length} (${pages}).pdf`;
  });
}
