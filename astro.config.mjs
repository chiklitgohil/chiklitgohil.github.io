import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://chiklitgohil.github.io",
  integrations: [
    mdx(),
    sitemap({
      // /garden is only a redirect to the Digital Garden.
      filter: (page) => !page.includes("/garden"),
    }),
  ],
  // Self-hosted at build time: no request to Google Fonts from visitors' browsers.
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: ["100 900"],
      styles: ["normal", "italic"],
      subsets: ["latin"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
