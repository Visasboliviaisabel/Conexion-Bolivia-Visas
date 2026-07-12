export type Locale = "es" | "en" | "zh" | "zh-tw" | "ar" | "pt" | "ru";

export type PageKey = "home" | "services" | "contact";

export const defaultLocale: Locale = "es";

export const locales: Record<
  Locale,
  {
    label: string;
    hreflang: string;
    dir: "ltr" | "rtl";
    slugs: Record<Exclude<PageKey, "home">, string>;
  }
> = {
  es: {
    label: "Español",
    hreflang: "es",
    dir: "ltr",
    slugs: { services: "servicios", contact: "contacto" },
  },
  en: {
    label: "English",
    hreflang: "en",
    dir: "ltr",
    slugs: { services: "services", contact: "contact" },
  },
  zh: {
    label: "中文",
    hreflang: "zh-CN",
    dir: "ltr",
    slugs: { services: "services", contact: "contact" },
  },
  "zh-tw": {
    label: "繁體中文",
    hreflang: "zh-TW",
    dir: "ltr",
    slugs: { services: "services", contact: "contact" },
  },
  ar: {
    label: "العربية",
    hreflang: "ar",
    dir: "rtl",
    slugs: { services: "services", contact: "contact" },
  },
  pt: {
    label: "Português",
    hreflang: "pt-BR",
    dir: "ltr",
    slugs: { services: "servicos", contact: "contato" },
  },
  ru: {
    label: "Русский",
    hreflang: "ru",
    dir: "ltr",
    slugs: { services: "uslugi", contact: "kontakt" },
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
