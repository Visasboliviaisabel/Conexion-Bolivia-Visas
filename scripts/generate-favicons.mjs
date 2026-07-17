import sharp from "sharp";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public/images/favicon-source.png");
const publicDir = join(root, "public");

const BRAND_DARK = "#0d2b45";

function frameSvg(size) {
  const radius = Math.round(size * 0.2);
  const border = Math.max(1, Math.round(size * 0.09));

  return Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff" stroke="${BRAND_DARK}" stroke-width="${border}"/>
    </svg>`,
  );
}

async function renderLogo(inner, outputSize) {
  const scale = outputSize <= 32 ? 4 : 2;
  const renderSize = inner * scale;

  let pipeline = sharp(logoPath).resize(renderSize, renderSize, {
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  });

  if (outputSize <= 32) {
    pipeline = pipeline.modulate({ saturation: 1.3, brightness: 0.95 });
  }

  const hiRes = await pipeline.png().toBuffer();

  return sharp(hiRes)
    .resize(inner, inner, { kernel: sharp.kernel.lanczos3 })
    .png()
    .toBuffer();
}

async function buildFavicon(size) {
  const border = Math.max(1, Math.round(size * 0.09));
  const inset = border;
  const inner = size - inset * 2;

  const logo = await renderLogo(inner, size);

  return sharp(frameSvg(size))
    .composite([{ input: logo, left: inset, top: inset }])
    .png()
    .toBuffer();
}

async function buildFaviconSvg(size) {
  const border = Math.max(1, Math.round(size * 0.09));
  const inset = border;
  const inner = size - inset * 2;
  const radius = Math.round(size * 0.2);
  const logoBase64 = (await renderLogo(inner, size)).toString("base64");

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${radius}" fill="#ffffff" stroke="${BRAND_DARK}" stroke-width="${border}"/>
  <image xlink:href="data:image/png;base64,${logoBase64}" x="${inset}" y="${inset}" width="${inner}" height="${inner}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
}

writeFileSync(join(publicDir, "favicon.svg"), await buildFaviconSvg(32));

const sizes = [
  ["favicon-16.png", 16],
  ["favicon-32.png", 32],
  ["apple-touch-icon.png", 180],
];

for (const [name, size] of sizes) {
  writeFileSync(join(publicDir, name), await buildFavicon(size));
  console.log(`Wrote ${name} (${size}x${size})`);
}
