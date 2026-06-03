import { mdsvex } from "mdsvex";
import path from "path";
import { fileURLToPath } from "url";
import mdsvexConfig from "./mdsvex.config.js";
import adapter from "@sveltejs/adapter-vercel";
// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { includeFiles } from "./include-files.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
      docsDir: path.resolve(__dirname, "src/routes/docs"),
      examplesDir: path.resolve(__dirname, "src/routes/docs-examples")
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
      handleHttpError: ({ status, path: routePath, referrer }) => {
        if (status === 404) {
          // Known pages/assets that are not yet implemented or are external references
          const knownMissing = [
            "/builder/flowbite.mp4", // trackSrc attr mistakenly followed as a link
            "/docs/icons/quickstart", // icons docs page not yet created
            "/icons", // icons landing page not yet created
            "/api/kanban/columns" // example API route only used client-side
          ];
          if (!knownMissing.includes(routePath)) {
            console.warn(`404 during prerender: ${routePath} (linked from ${referrer})`);
          }
          return;
        }
        throw new Error(`${status} ${routePath}`);
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
