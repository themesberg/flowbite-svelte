import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter(),
    vite: {
      ssr: {
        noExternal: ['svelte-icons'],
      },
      optimizeDeps: {
        include: ['highlight.js', 'highlight.js/lib/core'],
      },
    },
  },
};

export default config;
