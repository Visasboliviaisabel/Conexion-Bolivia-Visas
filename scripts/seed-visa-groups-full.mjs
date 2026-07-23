/**
 * Seed the full Bolivia visa country list (~195 countries).
 *
 * Source: Bolivia embassy group lists (embajadadebolivia.eu) plus
 * US visa-free entry (Dec 2025) and extra territories on Bolivia's checker.
 *
 * Run: npm run seed:visa-groups-full
 */

import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const dataPath = join(root, "src/data/visa-groups.json");

const OFFICIAL_URL = "https://consulados.cancilleria.gob.bo/base/visas/";

/** @type {Record<string, 1 | 2 | 3>} */
const GROUP_BY_CODE = {
  // Group I — no visa required
  AD: 1,
  AR: 1,
  AU: 1,
  AT: 1,
  BE: 1,
  BO: 1,
  BR: 1,
  CA: 1,
  CL: 1,
  CO: 1,
  CR: 1,
  HR: 1,
  CZ: 1,
  DK: 1,
  EC: 1,
  EE: 1,
  FI: 1,
  FR: 1,
  DE: 1,
  GR: 1,
  HU: 1,
  IS: 1,
  IE: 1,
  IT: 1,
  JP: 1,
  LV: 1,
  LI: 1,
  LT: 1,
  LU: 1,
  MX: 1,
  MC: 1,
  NL: 1,
  NZ: 1,
  NO: 1,
  PA: 1,
  PY: 1,
  PE: 1,
  PH: 1,
  PL: 1,
  PT: 1,
  PR: 1,
  SK: 1,
  SI: 1,
  SM: 1,
  ES: 1,
  PS: 1,
  SE: 1,
  CH: 1,
  TR: 1,
  GB: 1,
  US: 1,
  UY: 1,
  VA: 1,
  VE: 1,

  // Group III — visa with prior Migraciones authorization
  AF: 3,
  AO: 3,
  BT: 3,
  KH: 3,
  TD: 3,
  CD: 3,
  ID: 3,
  IQ: 3,
  IL: 3,
  LA: 3,
  LY: 3,
  NG: 3,
  KP: 3,
  PK: 3,
  RW: 3,
  SO: 3,
  SD: 3,
  SY: 3,
  TL: 3,
  YE: 3,

  // Group II — visa required (no prior Migraciones consult)
  AL: 2,
  DZ: 2,
  AG: 2,
  AM: 2,
  AZ: 2,
  BS: 2,
  BH: 2,
  BD: 2,
  BB: 2,
  BY: 2,
  BZ: 2,
  BJ: 2,
  BA: 2,
  BW: 2,
  BN: 2,
  BG: 2,
  BF: 2,
  BI: 2,
  CM: 2,
  CV: 2,
  CF: 2,
  CG: 2,
  CN: 2,
  TW: 2,
  HK: 2,
  KM: 2,
  CI: 2,
  CU: 2,
  CY: 2,
  DJ: 2,
  DM: 2,
  DO: 2,
  EG: 2,
  SV: 2,
  GQ: 2,
  ER: 2,
  ET: 2,
  FJ: 2,
  GA: 2,
  GM: 2,
  GE: 2,
  GH: 2,
  GN: 2,
  GD: 2,
  GT: 2,
  GW: 2,
  GY: 2,
  HT: 2,
  HN: 2,
  IN: 2,
  IR: 2,
  JM: 2,
  JO: 2,
  KZ: 2,
  KE: 2,
  KI: 2,
  KW: 2,
  KG: 2,
  LB: 2,
  LS: 2,
  LR: 2,
  MK: 2,
  MG: 2,
  MW: 2,
  MY: 2,
  MV: 2,
  ML: 2,
  MT: 2,
  MH: 2,
  MR: 2,
  MU: 2,
  FM: 2,
  MD: 2,
  MN: 2,
  ME: 2,
  MA: 2,
  MZ: 2,
  MM: 2,
  NA: 2,
  NR: 2,
  NP: 2,
  NI: 2,
  NE: 2,
  OM: 2,
  PW: 2,
  PG: 2,
  QA: 2,
  RO: 2,
  RU: 2,
  KN: 2,
  LC: 2,
  MF: 2,
  VC: 2,
  WS: 2,
  ST: 2,
  SA: 2,
  SN: 2,
  RS: 2,
  SC: 2,
  SL: 2,
  SG: 2,
  SB: 2,
  ZA: 2,
  KR: 2,
  LK: 2,
  SR: 2,
  SZ: 2,
  TJ: 2,
  TZ: 2,
  TH: 2,
  TG: 2,
  TO: 2,
  TT: 2,
  TN: 2,
  TM: 2,
  TV: 2,
  UG: 2,
  UA: 2,
  AE: 2,
  UZ: 2,
  VU: 2,
  VN: 2,
  ZM: 2,
  ZW: 2,
};

/** @type {Record<string, string>} */
const NATIONALITY_BY_CODE = {
  IN: "india",
  CN: "china",
  ID: "indonesia",
  RS: "serbia",
  UA: "ukraine",
  IL: "israel",
  BR: "brazil",
  RU: "russia",
};

/** Preferred English labels for a few non-standard codes. */
const NAME_EN_OVERRIDES = {
  BO: "Bolivia",
  CD: "Democratic Republic of the Congo",
  CG: "Republic of the Congo",
  CI: "Côte d'Ivoire",
  CV: "Cape Verde",
  CZ: "Czech Republic",
  FK: "Falkland Islands",
  GB: "United Kingdom",
  HK: "Hong Kong",
  MK: "North Macedonia",
  PS: "Palestine",
  KR: "South Korea",
  MF: "Saint Martin",
  ST: "São Tomé and Príncipe",
  SZ: "Eswatini",
  TW: "Taiwan",
  US: "United States",
  VA: "Vatican City",
};

/** Preferred Spanish labels where Intl differs from site copy. */
const NAME_ES_OVERRIDES = {
  BO: "Bolivia",
  CD: "República Democrática del Congo",
  CG: "República del Congo",
  CI: "Costa de Marfil",
  CV: "Cabo Verde",
  CZ: "República Checa",
  DE: "Alemania",
  DO: "República Dominicana",
  AE: "Emiratos Árabes Unidos",
  GB: "Reino Unido",
  GR: "Grecia",
  HK: "Hong Kong",
  HN: "Honduras",
  IN: "India",
  MK: "Macedonia del Norte",
  NL: "Países Bajos",
  NZ: "Nueva Zelanda",
  PH: "Filipinas",
  KR: "Corea del Sur",
  MF: "San Martín",
  ST: "Santo Tomé y Príncipe",
  SZ: "Esuatini",
  CH: "Suiza",
  TW: "Taiwán",
  TR: "Turquía",
  US: "Estados Unidos",
  VA: "Vaticano",
  VN: "Vietnam",
};

const nameEnDisplay = new Intl.DisplayNames(["en"], { type: "region" });
const nameEsDisplay = new Intl.DisplayNames(["es"], { type: "region" });

function countryName(code, locale) {
  const overrides = locale === "es" ? NAME_ES_OVERRIDES : NAME_EN_OVERRIDES;
  if (overrides[code]) return overrides[code];
  try {
    return (locale === "es" ? nameEsDisplay : nameEnDisplay).of(code);
  } catch {
    return code;
  }
}

const countries = Object.entries(GROUP_BY_CODE)
  .map(([code, group]) => {
    const entry = {
      code,
      nameEn: countryName(code, "en"),
      nameEs: countryName(code, "es"),
      group,
    };
    const nationalityId = NATIONALITY_BY_CODE[code];
    if (nationalityId) entry.nationalityId = nationalityId;
    return entry;
  })
  .sort((a, b) => a.nameEn.localeCompare(b.nameEn));

const data = {
  syncedAt: null,
  officialSourceUrl: OFFICIAL_URL,
  countries,
};

writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");

console.log(`Seeded ${countries.length} countries to ${dataPath}`);
console.log(
  `  Group I: ${countries.filter((c) => c.group === 1).length}, Group II: ${countries.filter((c) => c.group === 2).length}, Group III: ${countries.filter((c) => c.group === 3).length}`,
);
