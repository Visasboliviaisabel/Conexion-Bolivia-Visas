export type Locale = "es" | "en" | "zh" | "zh-tw" | "ar" | "pt" | "ru" | "id" | "uk" | "sr";

export type PageKey = "home" | "services" | "contact" | "guide";

export const defaultLocale: Locale = "es";

export const locales: Record<
  Locale,
  {
    label: string;
    flag: string;
    hreflang: string;
    dir: "ltr" | "rtl";
    slugs: Record<Exclude<PageKey, "home">, string>;
  }
> = {
  es: {
    label: "Español",
    flag: "🇵🇪",
    hreflang: "es",
    dir: "ltr",
    slugs: { services: "servicios", contact: "contacto", guide: "guia" },
  },
  en: {
    label: "English",
    flag: "🇺🇸",
    hreflang: "en",
    dir: "ltr",
    slugs: { services: "services", contact: "contact", guide: "guide" },
  },
  zh: {
    label: "中文",
    flag: "🇨🇳",
    hreflang: "zh-CN",
    dir: "ltr",
    slugs: { services: "services", contact: "contact", guide: "guide" },
  },
  "zh-tw": {
    label: "繁體中文",
    flag: "🇹🇼",
    hreflang: "zh-TW",
    dir: "ltr",
    slugs: { services: "services", contact: "contact", guide: "guide" },
  },
  ar: {
    label: "العربية",
    flag: "🇸🇦",
    hreflang: "ar",
    dir: "rtl",
    slugs: { services: "services", contact: "contact", guide: "guide" },
  },
  pt: {
    label: "Português",
    flag: "🇧🇷",
    hreflang: "pt-BR",
    dir: "ltr",
    slugs: { services: "servicos", contact: "contato", guide: "guia" },
  },
  ru: {
    label: "Русский",
    flag: "🇷🇺",
    hreflang: "ru",
    dir: "ltr",
    slugs: { services: "uslugi", contact: "kontakt", guide: "gid" },
  },
  id: {
    label: "Bahasa Indonesia",
    flag: "🇮🇩",
    hreflang: "id",
    dir: "ltr",
    slugs: { services: "layanan", contact: "kontak", guide: "panduan" },
  },
  uk: {
    label: "Українська",
    flag: "🇺🇦",
    hreflang: "uk",
    dir: "ltr",
    slugs: { services: "posluhy", contact: "kontakt", guide: "posibnyk" },
  },
  sr: {
    label: "Srpski",
    flag: "🇷🇸",
    hreflang: "sr",
    dir: "ltr",
    slugs: { services: "usluge", contact: "kontakt", guide: "vodic" },
  },
};

export const localeList = Object.keys(locales) as Locale[];

export function localePath(locale: Locale, page: PageKey = "home"): string {
  if (page === "home") return `/${locale}/`;
  return `/${locale}/${locales[locale].slugs[page]}/`;
}

export function getLocaleFromParam(param: string): Locale | undefined {
  return localeList.includes(param as Locale) ? (param as Locale) : undefined;
}
