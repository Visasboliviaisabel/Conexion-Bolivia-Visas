/**
 * Export src/data/visa-groups.json to scripts/visa-groups-sheet-template.csv
 * Run: node scripts/export-visa-groups-csv.mjs
 */

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { CSV_HEADER_ROW } from "./visa-groups-csv-columns.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(root, "src/data/visa-groups.json");
const csvPath = join(root, "scripts/visa-groups-sheet-template.csv");

const data = JSON.parse(readFileSync(dataPath, "utf8"));

const lines = [
  `ultima_revision,${data.lastReviewed}`,
  `enlace_oficial,${data.officialSourceUrl}`,
  CSV_HEADER_ROW,
];

for (const country of [...data.countries].sort((a, b) =>
  a.nameEn.localeCompare(b.nameEn),
)) {
  lines.push(
    [
      country.code,
      country.nameEn,
      country.nameEs,
      country.group,
      country.nationalityId ?? "",
    ].join(","),
  );
}

writeFileSync(csvPath, `${lines.join("\n")}\n`, "utf8");
console.log(`Exported ${data.countries.length} countries to ${csvPath}`);
