/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import path from "path";
import pkg from "./package.json" with { type: "json" };
import devtoolsJson from "vite-plugin-devtools-json";
import tiptapPackage from "./node_modules/@tiptap/core/package.json";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), tailwindcss(), devtoolsJson(), examples],
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
      "flowbite-svelte": path.resolve(process.cwd(), "./src/lib/index.ts")
    },
    conditions: process.env.VITEST ? ["browser"] : undefined
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup-client.ts"],
    include: ["src/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)"]
  },

  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __TIPTAP__: JSON.stringify(tiptapPackage.version)
  }
});
