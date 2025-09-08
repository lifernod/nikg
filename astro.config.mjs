// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto Serif",
        cssVariable: "--font-roboto-serif"
      }
    ]
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [svelte()],
});