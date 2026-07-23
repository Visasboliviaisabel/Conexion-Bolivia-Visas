/**
 * Sync Bolivia visa group data from a published Google Sheet CSV.
 *
 * Setup (one-time):
 * 1. Import scripts/visa-groups-sheet-template.csv into Google Sheets
 * 2. Share the sheet with Isabel for editing
 * 3. File → Share → Publish to web → CSV (entire sheet)
 * 4. Set VISA_GROUPS_SHEET_CSV_URL in .env or GitHub Actions secrets
 *
 * Sheet format (Spanish headers for Isabel):
 *   enlace_oficial,https://consulados.cancilleria.gob.bo/base/visas/
 *   codigo_pais,nombre_ingles,nombre_espanol,grupo,guia_especial
 *   AR,Argentina,Argentina,1,
 *
 * Run: npm run sync:visa-groups
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  DATA_HEADERS,
  META_KEYS,
  findDataHeaderLine,
  findHeaderIndex,
} from "./visa-groups-csv-columns.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(root, "src/data/visa-groups.json");

const CSV_URL = process.env.VISA_GROUPS_SHEET_CSV_URL;
const VALID_GROUPS = new Set(["1", "2", "3"]);
const VALID_NATIONALITIES = new Set([
  "india",
  "china",
  "indonesia",
  "serbia",
  "ukraine",
  "israel",
  "brazil",
  "russia",
]);

const DEFAULT_OFFICIAL_URL =
  "https://consulados.cancilleria.gob.bo/base/visas/";

function loadDataFile() {
  return JSON.parse(readFileSync(dataPath, "utf8"));
}

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

  let officialSourceUrl = null;
  let headerLineIndex = -1;

  for (let i = 0; i < lines.length; i += 1) {
    const cells = parseCsvLine(lines[i]);
    const key = (cells[0] ?? "").toLowerCase();

    if (META_KEYS.officialUrl.includes(key)) {
      officialSourceUrl = cells[1]?.trim() || null;
      continue;
    }
    // Ignore legacy ultima_revision / last_reviewed rows from older sheets.
    if (key === "ultima_revision" || key === "last_reviewed") {
      continue;
    }
  }

  headerLineIndex = findDataHeaderLine(lines, parseCsvLine);

  if (headerLineIndex < 0) {
    throw new Error(
      'CSV must include a header row with "codigo_pais" or "country_code".',
    );
  }

  const header = parseCsvLine(lines[headerLineIndex]).map((cell) =>
    cell.toLowerCase(),
  );
  const index = {
    code: findHeaderIndex(header, DATA_HEADERS.code),
    nameEn: findHeaderIndex(header, DATA_HEADERS.nameEn),
    nameEs: findHeaderIndex(header, DATA_HEADERS.nameEs),
    group: findHeaderIndex(header, DATA_HEADERS.group),
    nationalityId: findHeaderIndex(header, DATA_HEADERS.nationalityId),
  };

  if (index.code < 0 || index.group < 0) {
    throw new Error(
      'CSV must include at least "codigo_pais"/"country_code" and "grupo"/"group" columns.',
    );
  }

  const countries = [];

  for (const line of lines.slice(headerLineIndex + 1)) {
    const cells = parseCsvLine(line);
    const code = (cells[index.code] ?? "").toUpperCase();
    const groupRaw = cells[index.group] ?? "";
    const group = Number(groupRaw);

    if (!/^[A-Z]{2}$/.test(code)) continue;
    if (!VALID_GROUPS.has(String(group))) {
      console.warn(`Skipping ${code}: invalid group "${groupRaw}"`);
      continue;
    }

    const nameEn =
      index.nameEn >= 0 ? cells[index.nameEn]?.trim() || code : code;
    const nameEs =
      index.nameEs >= 0 ? cells[index.nameEs]?.trim() || nameEn : nameEn;

    const nationalityRaw =
      index.nationalityId >= 0
        ? (cells[index.nationalityId] ?? "").trim().toLowerCase()
        : "";

    const entry = {
      code,
      nameEn,
      nameEs,
      group,
    };

    if (nationalityRaw) {
      if (!VALID_NATIONALITIES.has(nationalityRaw)) {
        console.warn(`Skipping nationality_id for ${code}: "${nationalityRaw}"`);
      } else {
        entry.nationalityId = nationalityRaw;
      }
    }

    countries.push(entry);
  }

  countries.sort((a, b) => a.nameEn.localeCompare(b.nameEn));

  return { countries, officialSourceUrl };
}

async function main() {
  if (!CSV_URL) {
    console.error(
      "Missing VISA_GROUPS_SHEET_CSV_URL. Add it to .env or your environment.",
    );
    process.exit(1);
  }

  const existing = loadDataFile();
  const response = await fetch(CSV_URL);

  if (!response.ok) {
    throw new Error(`Failed to fetch sheet CSV (${response.status})`);
  }

  const csv = await response.text();
  const { countries, officialSourceUrl } = parseCsv(csv);

  if (countries.length === 0) {
    throw new Error("No valid countries parsed from CSV.");
  }

  const output = {
    syncedAt: new Date().toISOString(),
    officialSourceUrl:
      process.env.VISA_GROUPS_OFFICIAL_URL ??
      officialSourceUrl ??
      existing.officialSourceUrl ??
      DEFAULT_OFFICIAL_URL,
    countries,
  };

  saveDataFile(output);
  console.log(`Synced ${countries.length} countries.`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
