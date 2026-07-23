/** Shared CSV column names — Spanish headers for Isabel's sheet, English aliases for sync. */

export const META_KEYS = {
  lastReviewed: ["ultima_revision", "last_reviewed"],
  officialUrl: ["enlace_oficial", "official_url"],
};

export const DATA_HEADERS = {
  code: ["codigo_pais", "country_code"],
  nameEn: ["nombre_ingles", "country_name_en"],
  nameEs: ["nombre_espanol", "country_name_es"],
  group: ["grupo", "group"],
  nationalityId: ["guia_especial", "nationality_id"],
};

export function findHeaderIndex(header, aliases) {
  for (const alias of aliases) {
    const index = header.indexOf(alias.toLowerCase());
    if (index >= 0) return index;
  }
  return -1;
}

export function findDataHeaderLine(lines, parseCsvLine) {
  for (let i = 0; i < lines.length; i += 1) {
    const header = parseCsvLine(lines[i]).map((cell) => cell.toLowerCase());
    if (findHeaderIndex(header, DATA_HEADERS.code) >= 0) {
      return i;
    }
  }
  return -1;
}

export const CSV_HEADER_ROW = [
  DATA_HEADERS.code[0],
  DATA_HEADERS.nameEn[0],
  DATA_HEADERS.nameEs[0],
  DATA_HEADERS.group[0],
  DATA_HEADERS.nationalityId[0],
].join(",");
