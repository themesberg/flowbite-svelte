import { sveltekit } from '@sveltejs/kit/vite';
import examples from 'mdsvexamples/vite';
import path from 'path';
import pkg from './package.json' with { type: 'json' };

import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit(), tailwindcss(), examples],
  // test: {
  //   include: ['src/**/*.{test,spec}.{js,ts}']
  // },
  build: {
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 8080,
    strictPort: false
  },
  resolve: {
    alias: {
      'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.js'),
      'flowbite-svelte-blocks': path.resolve(process.cwd(), './node_modules/flowbite-svelte-blocks/dist/index.js')
    }
  },
  define: {
    __VERSION__: JSON.stringify(pkg.version)
  }
});


