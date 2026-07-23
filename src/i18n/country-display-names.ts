import type { Locale } from "./config";

type CountryNames = { nameEn: string; nameEs: string };

const displayNames = {
  zh: new Intl.DisplayNames(["zh-CN"], { type: "region" }),
  "zh-tw": new Intl.DisplayNames(["zh-TW"], { type: "region" }),
};

/** Prefer sheet Spanish names where Intl differs (e.g. Bolivia branding). */
const NAME_OVERRIDES: Partial<Record<Locale, Record<string, string>>> = {
  zh: {
    BO: "玻利维亚",
    US: "美国",
    GB: "英国",
    KR: "韩国",
    KP: "朝鲜",
  },
  "zh-tw": {
    BO: "玻利維亞",
    US: "美國",
    GB: "英國",
    KR: "韓國",
    KP: "北韓",
  },
};

export function getCountrySortLocale(locale: Locale): string {
  if (locale === "es" || locale === "pt") return "es";
  if (locale === "zh") return "zh-CN";
  if (locale === "zh-tw") return "zh-TW";
  return "en";
}

export function getCountryDisplayName(
  locale: Locale,
  code: string,
  names: CountryNames,
): string {
  if (locale === "es" || locale === "pt") return names.nameEs;

  const override = NAME_OVERRIDES[locale]?.[code];
  if (override) return override;

  if (locale === "zh" || locale === "zh-tw") {
    try {
      return displayNames[locale].of(code) ?? names.nameEn;
    } catch {
      return names.nameEn;
    }
  }

  return names.nameEn;
}

export function sortCountriesByDisplayName<
  T extends { code: string; nameEn: string; nameEs: string },
>(countries: T[], locale: Locale): T[] {
  const sortLocale = getCountrySortLocale(locale);
  return [...countries].sort((a, b) => {
    const nameA = getCountryDisplayName(locale, a.code, a);
    const nameB = getCountryDisplayName(locale, b.code, b);
    return nameA.localeCompare(nameB, sortLocale);
  });
}
