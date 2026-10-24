// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://jkieb.github.io',
  base: '/jkieb-astro',
  output: 'static',
  integrations: [sitemap({ filter: (page) => !page.includes('/ideen') })],
  build: {
    assets: 'assets'
  },
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  }
});
