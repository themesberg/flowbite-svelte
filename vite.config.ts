/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import path from "path";
import pkg from "./package.json" with { type: "json" };
import devtoolsJson from "vite-plugin-devtools-json";
import tiptapPackage from "./node_modules/@tiptap/core/package.json";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import { enhancedImages } from "@sveltejs/enhanced-img";
import textEditorPackage from "./node_modules/@flowbite-svelte-plugins/texteditor/package.json" with { type: "json" };
import { playwright } from "@vitest/browser-playwright";

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), tailwindcss(), devtoolsJson(), examples],
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
    }
  },
  test: {
    projects: [
      {
        extends: "./vite.config.ts",
        test: {
          name: "client",
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [
              {
                browser: "chromium",
                headless: true 
               }
              // { browser: 'firefox' },
              // { browser: 'webkit' }
            ]
          },
          include: ["src/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
          setupFiles: ["./vitest-setup-client.ts"]
        }
      },
      {
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)"]
        }
      }
    ]
  },
  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __TIPTAP__: JSON.stringify(tiptapPackage.version),
    __TEXTEDITOR__: JSON.stringify(textEditorPackage.version)
  }
});
