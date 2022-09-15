import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import examples from 'mdsvexamples/vite';

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit(), examples],
  resolve: {
    alias: {
      'flowbite-svelte': path.resolve(process.cwd(), './src/lib/index.ts')
    }
  }
};

export default config;
