import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const publicDir = join(root, "public");
const sourcePath = join(root, "public/images/favicon-source.png");

// Brighter than site --brand (#34698f) so the mark reads on dark browser tabs.
const MARK_COLOR = { r: 0x6b, g: 0xb8, b: 0xe8 }; // #6bb8e8

/**
 * Isolate the flamingo (drop the hexagon ring) and retint.
 * Hexagon + flamingo are separate connected components in the source art.
 */
async function toTransparentMark(inputPath) {
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const w = info.width;
  const h = info.height;
  const solid = new Uint8Array(w * h);

  for (let i = 0, p = 0; i < data.length; i += 4, p++) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const saturation = max === 0 ? 0 : (max - min) / max;
    const brightness = (r + g + b) / 3;
    solid[p] = brightness < 235 || saturation > 0.12 ? 1 : 0;
  }

  // Label connected components
  const label = new Int32Array(w * h);
  const sizes = [0];
  let n = 0;
  const stack = [];

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const p = y * w + x;
      if (!solid[p] || label[p]) continue;
      n++;
      sizes[n] = 0;
      stack.push(p);
      label[p] = n;
      while (stack.length) {
        const cur = stack.pop();
        sizes[n]++;
        const cx = cur % w;
        const cy = (cur / w) | 0;
        for (const [dx, dy] of [
          [1, 0],
          [-1, 0],
          [0, 1],
          [0, -1],
        ]) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx < 0 || ny < 0 || nx >= w || ny >= h) continue;
          const np = ny * w + nx;
          if (solid[np] && !label[np]) {
            label[np] = n;
            stack.push(np);
          }
        }
      }
    }
  }

  // Largest component = hexagon ring; next = flamingo
  const ranked = sizes
    .map((s, i) => ({ i, s }))
    .filter((x) => x.i > 0 && x.s > 100)
    .sort((a, b) => b.s - a.s);

  if (ranked.length < 2) {
    throw new Error(
      "Expected hexagon + flamingo components; check favicon-source.png",
    );
  }

  const flamingoId = ranked[1].i;

  let minX = w;
  let minY = h;
  let maxX = 0;
  let maxY = 0;

  for (let p = 0; p < w * h; p++) {
    const i = p * 4;
    if (label[p] === flamingoId) {
      data[i] = MARK_COLOR.r;
      data[i + 1] = MARK_COLOR.g;
      data[i + 2] = MARK_COLOR.b;
      data[i + 3] = 255;
      const x = p % w;
      const y = (p / w) | 0;
      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x > maxX) maxX = x;
      if (y > maxY) maxY = y;
    } else {
      data[i + 3] = 0;
    }
  }

  const pad = Math.max(2, Math.round(Math.max(maxX - minX, maxY - minY) * 0.04));
  const left = Math.max(0, minX - pad);
  const top = Math.max(0, minY - pad);
  const width = Math.min(w - left, maxX - minX + 1 + pad * 2);
  const height = Math.min(h - top, maxY - minY + 1 + pad * 2);
  const side = Math.max(width, height);

  const cropped = await sharp(data, {
    raw: { width: w, height: h, channels: 4 },
  })
    .extract({ left, top, width, height })
    .png()
    .toBuffer();

  const ox = Math.floor((side - width) / 2);
  const oy = Math.floor((side - height) / 2);

  return sharp({
    create: {
      width: side,
      height: side,
      channels: 4,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    },
  })
    .composite([{ input: cropped, left: ox, top: oy }])
    .png()
    .toBuffer();
}

/**
 * @param {number} size
 * @param {{ fill?: number }} [opts]
 */
async function renderMark(size, opts = {}) {
  const fill = opts.fill ?? 1;
  const mark = await toTransparentMark(sourcePath);
  const scale = size <= 32 ? 8 : 2;
  const target = Math.round(size * fill);
  const renderSize = target * scale;

  const hiRes = await sharp(mark)
    .resize(renderSize, renderSize, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toBuffer();

  let pipeline = sharp(hiRes).resize(target, target, {
    kernel: sharp.kernel.lanczos3,
  });

  if (target > size) {
    const left = Math.floor((target - size) / 2);
    const top = Math.floor((target - size) / 2);
    pipeline = pipeline.extract({ left, top, width: size, height: size });
  }

  if (size <= 32) {
    const { data, info } = await pipeline
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    for (let i = 0; i < data.length; i += 4) {
      const a = data[i + 3];
      if (a === 0) continue;
      if (a < 96) {
        data[i + 3] = 0;
      } else {
        data[i] = MARK_COLOR.r;
        data[i + 1] = MARK_COLOR.g;
        data[i + 2] = MARK_COLOR.b;
        data[i + 3] = 255;
      }
    }

    return sharp(data, {
      raw: { width: info.width, height: info.height, channels: 4 },
    })
      .png()
      .toBuffer();
  }

  return pipeline.png().toBuffer();
}

async function buildAppleTouch(size) {
  const inset = Math.round(size * 0.88);
  const mark = await renderMark(inset);
  const offset = Math.round((size - inset) / 2);

  return sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: mark, left: offset, top: offset }])
    .png()
    .toBuffer();
}

async function buildFaviconSvg(size, fill = 1) {
  const logoBase64 = (await renderMark(size, { fill })).toString("base64");
  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}">
  <image xlink:href="data:image/png;base64,${logoBase64}" width="${size}" height="${size}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
}

const cliSource = process.argv[2];
if (cliSource) {
  await sharp(cliSource).png().toFile(sourcePath);
  console.log(`Updated ${sourcePath}`);
}

// Flamingo-only: fill the tab canvas aggressively
const TAB_FILL = 1.12;

writeFileSync(join(publicDir, "favicon.svg"), await buildFaviconSvg(32, TAB_FILL));
console.log("Wrote favicon.svg");

const sizes = [
  ["favicon-16.png", 16, false],
  ["favicon-32.png", 32, false],
  ["apple-touch-icon.png", 180, true],
];

for (const [name, size, apple] of sizes) {
  const buf = apple
    ? await buildAppleTouch(size)
    : await renderMark(size, { fill: TAB_FILL });
  writeFileSync(join(publicDir, name), buf);
  console.log(
    `Wrote ${name} (${size}x${size}${apple ? ", solid bg" : `, flamingo-only, fill ${TAB_FILL}`})`,
  );
}
