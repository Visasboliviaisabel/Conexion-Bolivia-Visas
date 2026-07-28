export type Locale =
  | "es"
  | "en"
  | "zh"
  | "zh-tw"
  | "ar"
  | "he"
  | "pt"
  | "ru"
  | "id"
  | "uk"
  | "sr"
  | "hi";

export type PageKey = "home" | "services" | "contact" | "guide" | "tours";

export type TravelStory = "index" | "tips" | "discover" | "cusco" | "bolivia";

export const defaultLocale: Locale = "es";

export const locales: Record<
  Locale,
  {
    label: string;
    flag: string;
    hreflang: string;
    dir: "ltr" | "rtl";
    slugs: Record<Exclude<PageKey, "home">, string> & {
      discover: string;
      tips: string;
      cusco: string;
      bolivia: string;
    };
  }
> = {
  es: {
    label: "Español",
    flag: "🇵🇪",
    hreflang: "es",
    dir: "ltr",
    slugs: {
      services: "servicios",
      contact: "contacto",
      guide: "guia",
      tours: "viajes",
      tips: "consejos-viaje",
      discover: "descubre-bolivia",
      cusco: "tours-cusco",
      bolivia: "tours-bolivia",
    },
  },
  en: {
    label: "English",
    flag: "🇺🇸",
    hreflang: "en",
    dir: "ltr",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
  zh: {
    label: "中文",
    flag: "🇨🇳",
    hreflang: "zh-CN",
    dir: "ltr",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
  "zh-tw": {
    label: "繁體中文",
    flag: "🇹🇼",
    hreflang: "zh-TW",
    dir: "ltr",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
  ar: {
    label: "العربية",
    flag: "🇸🇦",
    hreflang: "ar",
    dir: "rtl",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
  he: {
    label: "עברית",
    flag: "🇮🇱",
    hreflang: "he",
    dir: "rtl",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
  pt: {
    label: "Português",
    flag: "🇧🇷",
    hreflang: "pt-BR",
    dir: "ltr",
    slugs: {
      services: "servicos",
      contact: "contato",
      guide: "guia",
      tours: "viagens",
      tips: "dicas-viagem",
      discover: "descubra-bolivia",
      cusco: "tours-cusco",
      bolivia: "tours-bolivia",
    },
  },
  ru: {
    label: "Русский",
    flag: "🇷🇺",
    hreflang: "ru",
    dir: "ltr",
    slugs: {
      services: "uslugi",
      contact: "kontakt",
      guide: "gid",
      tours: "puteshestviya",
      tips: "sovety-puteshestviyam",
      discover: "discover-bolivia",
      cusco: "tury-kusko",
      bolivia: "tury-boliviya",
    },
  },
  id: {
    label: "Bahasa Indonesia",
    flag: "🇮🇩",
    hreflang: "id",
    dir: "ltr",
    slugs: {
      services: "layanan",
      contact: "kontak",
      guide: "panduan",
      tours: "perjalanan",
      tips: "tips-perjalanan",
      discover: "discover-bolivia",
      cusco: "tur-cusco",
      bolivia: "tur-bolivia",
    },
  },
  uk: {
    label: "Українська",
    flag: "🇺🇦",
    hreflang: "uk",
    dir: "ltr",
    slugs: {
      services: "posluhy",
      contact: "kontakt",
      guide: "posibnyk",
      tours: "podorozhi",
      tips: "porady-mandrivnykam",
      discover: "discover-bolivia",
      cusco: "tury-kusko",
      bolivia: "tury-boliviya",
    },
  },
  sr: {
    label: "Srpski",
    flag: "🇷🇸",
    hreflang: "sr",
    dir: "ltr",
    slugs: {
      services: "usluge",
      contact: "kontakt",
      guide: "vodic",
      tours: "putovanja",
      tips: "saveti-za-put",
      discover: "discover-bolivia",
      cusco: "ture-cusco",
      bolivia: "ture-bolivija",
    },
  },
  hi: {
    label: "हिन्दी",
    flag: "🇮🇳",
    hreflang: "hi",
    dir: "ltr",
    slugs: {
      services: "services",
      contact: "contact",
      guide: "guide",
      tours: "travel",
      tips: "travel-tips",
      discover: "discover-bolivia",
      cusco: "cusco-tours",
      bolivia: "bolivia-tours",
    },
  },
};

export const localeList = Object.keys(locales) as Locale[];

export function localePath(locale: Locale, page: PageKey = "home"): string {
  if (page === "home") return `/${locale}/`;
  return `/${locale}/${locales[locale].slugs[page]}/`;
}

export function travelStoryPath(locale: Locale, story: TravelStory = "index"): string {
  if (story === "discover") return `/${locale}/${locales[locale].slugs.discover}/`;
  if (story === "tips") return `/${locale}/${locales[locale].slugs.tips}/`;
  if (story === "cusco") return `/${locale}/${locales[locale].slugs.cusco}/`;
  if (story === "bolivia") return `/${locale}/${locales[locale].slugs.bolivia}/`;
  return `/${locale}/${locales[locale].slugs.tours}/`;
}

export function getLocaleFromParam(param: string): Locale | undefined {
  return localeList.includes(param as Locale) ? (param as Locale) : undefined;
}
