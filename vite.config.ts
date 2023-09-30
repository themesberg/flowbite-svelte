import { sveltekit } from '@sveltejs/kit/vite';
import path from 'path';
import examples from 'mdsvexamples/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), examples],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  },
  build: {
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 8080,
    strictPort: false
  },
  resolve: {
    alias: {
      'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.js')
    }
  }
};

export default config;
