import { mdsvex } from "mdsvex";
import path from "path";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-vercel";
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { includeFiles } from "./include-files.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  compilerOptions: {
    // runes: true
  },
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    includeFiles({
      extensions: [".md"],
      docsDir: "src/routes/docs",
      examplesDir: "src/routes/docs-examples"
    }),
    mdsvex(mdsvexConfig),
    // preprocess({
    //   postcss: true
    // })
    vitePreprocess({ typeScript: true })
  ],
  vitePlugin: {
    inspector: {
      holdMode: true
    }
  },
  kit: {
    adapter: adapter(),
    alias: {
      $icons: path.resolve("./src/routes/utils/icons")
    }
  }
};

export default config;
