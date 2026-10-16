import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { locales } from "./src/i18n/config.ts";
import { siteFeatures } from "./src/data/site-features.ts";

// While tours are switched off, the tour pages only redirect, so keep them out of the sitemap.
const hiddenTourPaths = siteFeatures.showTours
  ? []
  : Object.entries(locales).flatMap(([lang, { slugs }]) => [
      `/${lang}/${slugs.cusco}/`,
      `/${lang}/${slugs.bolivia}/`,
    ]);

export default defineConfig({
  site: "https://visasboliviaconexion.com",
  base: "/",
  output: "static",
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en", "zh", "zh-tw", "ar", "he", "pt", "ru", "id", "uk", "sr", "hi"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !hiddenTourPaths.includes(new URL(page).pathname),
      i18n: {
        defaultLocale: "es",
        locales: {
          es: "es",
          en: "en-US",
          zh: "zh-CN",
          "zh-tw": "zh-TW",
          ar: "ar",
          he: "he",
          pt: "pt-BR",
          ru: "ru",
          id: "id",
          uk: "uk",
          sr: "sr",
          hi: "hi",
        },
      },
    }),
  ],
});
