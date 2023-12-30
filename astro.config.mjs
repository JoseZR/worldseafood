import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";

import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  site: "https://hfmexico.mx/worldseafood/",
  base: "/worldseafood",
  packageOptions: {
    // Set type to module for ECMAScript module support
    type: 'module',
    knownEntrypoints: ['@astrojs/partytown'],
  },    
  integrations: [sitemap({
    i18n: {
      defaultLocale: "es",
      locales: {
        en: "en",
        es: "es"
      }
    }
  }), tailwind(), astroI18next(), react(), partytown()]
});