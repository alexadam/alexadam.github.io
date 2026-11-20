// Minimal ZIP writer: stores files as they are (no compression), which suits PDFs since their
// content is compressed already. Pure function, works in the browser and in Node.

const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

export function crc32(bytes) {
  let c = 0xffffffff;
  for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

/** MS-DOS time and date fields for `d` (local time, 2-second steps, years 1980–2107). */
function dosTime(d) {
  const year = Math.min(Math.max(d.getFullYear(), 1980), 2107);
  return {
    time: (d.getHours() << 11) | (d.getMinutes() << 5) | (d.getSeconds() >> 1),
    date: ((year - 1980) << 9) | ((d.getMonth() + 1) << 5) | d.getDate(),
  };
}

/**
 * Build a ZIP archive.
 * @param {{ name: string, data: Uint8Array }[]} files names are stored as UTF-8
 * @param {Date} [when] modification time recorded for every file
 * @returns {Uint8Array}
 */
export function makeZip(files, when = new Date()) {
  const enc = new TextEncoder();
  const { time, date } = dosTime(when);
  const entries = files.map(({ name, data }) => ({ name: enc.encode(name), data, crc: crc32(data) }));
  const local = entries.reduce((n, e) => n + 30 + e.name.length + e.data.length, 0);
  const central = entries.reduce((n, e) => n + 46 + e.name.length, 0);
  if (entries.length > 0xffff || local + central + 22 > 0xffffffff) throw new Error('Too much to fit in one ZIP file');

  const out = new Uint8Array(local + central + 22);
  const v = new DataView(out.buffer);
  let p = 0;
  const u16 = (x) => { v.setUint16(p, x, true); p += 2; };
  const u32 = (x) => { v.setUint32(p, x, true); p += 4; };
  const bytes = (b) => { out.set(b, p); p += b.length; };
  // Fields shared by the local and the central header, from "version needed" to the extra field length.
  const common = (e) => {
    u16(20); u16(0x0800); u16(0); // version 2.0, UTF-8 names, stored
    u16(time); u16(date);
    u32(e.crc); u32(e.data.length); u32(e.data.length);
    u16(e.name.length); u16(0);
  };

  for (const e of entries) {
    e.offset = p;
    u32(0x04034b50); common(e); bytes(e.name); bytes(e.data);
  }
  const start = p;
  for (const e of entries) {
    // Made by "Unix", so unzip tools trust the UTF-8 flag instead of converting from a DOS code page.
    u32(0x02014b50); u16(0x0314); common(e);
    u16(0); u16(0); u16(0); u32(0o100644 << 16 >>> 0); // comment length, disk, internal attributes, rw-r--r-- file
    u32(e.offset); bytes(e.name);
  }
  const size = p - start;
  u32(0x06054b50); u16(0); u16(0); // end of central directory, on disk 0
  u16(entries.length); u16(entries.length);
  u32(size); u32(start); u16(0);
  return out;
}
