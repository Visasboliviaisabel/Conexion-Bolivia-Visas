/**
 * Sync Cusco / Bolivia tours from a published Google Sheet CSV.
 *
 * Setup (one-time):
 * 1. Import scripts/tours-sheet-template.csv into Google Sheets
 * 2. Share the sheet with Isabel for editing
 * 3. File → Share → Publish to web → CSV (Tours tab only)
 * 4. Set TOURS_SHEET_CSV_URL in .env or GitHub Actions secrets
 *
 * Sheet format (Spanish headers for Isabel):
 *   region,activo,orden,titulo_es,titulo_en,duracion_es,duracion_en,
 *   descripcion_es,descripcion_en,precio,imagen
 *
 * Run: npm run sync:tours
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(root, "src/data/tours.json");

const CSV_URL = process.env.TOURS_SHEET_CSV_URL;
const VALID_REGIONS = new Set(["cusco", "bolivia"]);

const HEADER_ALIASES = {
  region: ["region"],
  active: ["activo", "active"],
  order: ["orden", "order"],
  titleEs: ["titulo_es", "title_es"],
  titleEn: ["titulo_en", "title_en"],
  durationEs: ["duracion_es", "duration_es"],
  durationEn: ["duracion_en", "duration_en"],
  descriptionEs: ["descripcion_es", "description_es"],
  descriptionEn: ["descripcion_en", "description_en"],
  price: ["precio", "price"],
  image: ["imagen", "image"],
};

function saveDataFile(data) {
  writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

function parseCsvLine(line) {
  const cells = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      inQuotes = !inQuotes;
      continue;
    }
    if (char === "," && !inQuotes) {
      cells.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }

  cells.push(current.trim());
  return cells;
}

function parseCsv(text) {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"));

  if (lines.length === 0) {
    throw new Error("CSV is empty.");
  }

  const headerLineIndex = lines.findIndex((line) => {
    const first = parseCsvLine(line)[0]?.toLowerCase() ?? "";
    return first === "region";
  });

  if (headerLineIndex < 0) {
    throw new Error('CSV must include a header row starting with "region".');
  }

  const header = parseCsvLine(lines[headerLineIndex]).map((cell) =>
    cell.toLowerCase(),
  );

  const findIndex = (aliases) =>
    header.findIndex((cell) => aliases.includes(cell));

  const index = {
    region: findIndex(HEADER_ALIASES.region),
    active: findIndex(HEADER_ALIASES.active),
    order: findIndex(HEADER_ALIASES.order),
    titleEs: findIndex(HEADER_ALIASES.titleEs),
    titleEn: findIndex(HEADER_ALIASES.titleEn),
    durationEs: findIndex(HEADER_ALIASES.durationEs),
    durationEn: findIndex(HEADER_ALIASES.durationEn),
    descriptionEs: findIndex(HEADER_ALIASES.descriptionEs),
    descriptionEn: findIndex(HEADER_ALIASES.descriptionEn),
    price: findIndex(HEADER_ALIASES.price),
    image: findIndex(HEADER_ALIASES.image),
  };

  if (index.region < 0 || index.titleEs < 0) {
    throw new Error(
      'CSV must include at least "region" and "titulo_es" columns.',
    );
  }

  const tours = [];
  let skipped = 0;

  for (let row = headerLineIndex + 1; row < lines.length; row += 1) {
    const cells = parseCsvLine(lines[row]);
    const region = (cells[index.region] ?? "").trim().toLowerCase();
    const titleEs =
      index.titleEs >= 0 ? (cells[index.titleEs] ?? "").trim() : "";

    if (!region && !titleEs) continue;

    if (!VALID_REGIONS.has(region)) {
      console.warn(
        `Skipping row ${row + 1}: invalid region "${cells[index.region] ?? ""}" (use cusco or bolivia)`,
      );
      skipped += 1;
      continue;
    }

    if (!titleEs) {
      console.warn(`Skipping row ${row + 1}: missing titulo_es`);
      skipped += 1;
      continue;
    }

    const activeRaw =
      index.active >= 0
        ? (cells[index.active] ?? "si").trim().toLowerCase()
        : "si";
    const active =
      activeRaw === "si" ||
      activeRaw === "sí" ||
      activeRaw === "yes" ||
      activeRaw === "true" ||
      activeRaw === "1";

    const orderRaw = index.order >= 0 ? (cells[index.order] ?? "").trim() : "";
    const order = Number(orderRaw);
    const safeOrder = Number.isFinite(order) ? order : tours.length + 1;

    const cell = (key) =>
      index[key] >= 0 ? (cells[index[key]] ?? "").trim() : "";

    const price = cell("price") || null;
    let image = cell("image") || null;
    if (image) {
      // Allow site paths (/images/...) or public https URLs.
      if (!image.startsWith("/") && !/^https?:\/\//i.test(image)) {
        console.warn(
          `Row ${row + 1}: imagen "${image}" ignored (use /images/... or https:// URL)`,
        );
        image = null;
      }
    }

    tours.push({
      id: `${region}-${safeOrder}-${titleEs}`
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "")
        .slice(0, 80),
      region,
      active,
      order: safeOrder,
      title: {
        es: titleEs,
        en: cell("titleEn") || titleEs,
      },
      duration: {
        es: cell("durationEs"),
        en: cell("durationEn") || cell("durationEs"),
      },
      description: {
        es: cell("descriptionEs"),
        en: cell("descriptionEn") || cell("descriptionEs"),
      },
      price,
      image,
    });
  }

  tours.sort((a, b) => {
    if (a.region !== b.region) return a.region.localeCompare(b.region);
    if (a.order !== b.order) return a.order - b.order;
    return a.title.en.localeCompare(b.title.en);
  });

  return { tours, skipped };
}

async function main() {
  if (!CSV_URL) {
    console.error(
      "Missing TOURS_SHEET_CSV_URL. Add it to .env or your environment.",
    );
    process.exit(1);
  }

  const separator = CSV_URL.includes("?") ? "&" : "?";
  const response = await fetch(`${CSV_URL}${separator}_ts=${Date.now()}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet CSV (${response.status})`);
  }

  const csv = await response.text();
  const { tours, skipped } = parseCsv(csv);

  if (tours.length === 0) {
    throw new Error("No valid tours parsed from CSV.");
  }

  const output = {
    syncedAt: new Date().toISOString(),
    tours,
  };

  saveDataFile(output);
  console.log(
    `Synced ${tours.length} tours${skipped ? ` (${skipped} skipped)` : ""}.`,
  );
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
