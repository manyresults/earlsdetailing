// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Canonical production URL — used for sitemap, canonical tags, and OG URLs.
  site: 'https://earlsdetailing.com',
  integrations: [
    sitemap({
      // Keep the sitemap simple; every route is public and equally weighted.
      changefreq: 'monthly',
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow Astro's built-in image service to optimize local assets.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
