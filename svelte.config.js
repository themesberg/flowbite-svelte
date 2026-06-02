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
    experimental: {
      // Enable experimental async features for reactive context fixes
      async: true
    }
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
    adapter: adapter({
      external: ["satori", "@resvg/resvg-js", "@fontsource/noto-sans"]
    }),
    prerender: {
      handleHttpError: ({ status, path, referrer }) => {
        if (status === 404) {
          console.warn(`404 during prerender: ${path} (linked from ${referrer})`);
          return;
        }
        throw new Error(`${status} ${path}`);
      },
      handleMissingId: ({ path, id, referrers }) => {
        console.warn(`Missing id "${id}" on ${path} (linked from ${referrers.join(", ")})`);
      }
    },
    alias: {
      "flowbite-svelte": path.resolve("./src/lib/index.ts"),
      $icons: path.resolve("./src/routes/utils/icons"),
      $utils: path.resolve("./src/routes/utils")
    }
  }
};

export default config;
