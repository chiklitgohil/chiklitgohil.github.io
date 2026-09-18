import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://chiklitgohil.github.io",
  redirects: {
    '/garden': 'https://chiklit-knowledge-base.vercel.app/'
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
