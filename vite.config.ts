/// <reference types="vitest" />
import { sveltekit } from "@sveltejs/kit/vite";
import examples from "mdsvexamples/vite";
import path from "path";
import pkg from "./package.json" with { type: "json" };
import devtoolsJson from "vite-plugin-devtools-json";
import tiptapPackage from "./node_modules/@tiptap/core/package.json";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitest/config";
import textEditorPackage from "./node_modules/@flowbite-svelte-plugins/texteditor/package.json" with { type: "json" };
import { playwright } from "@vitest/browser-playwright";

// Set VITEST env var for hooks.server.js to detect test mode
process.env.VITEST = "true";

// Suppress SvelteKit cleanup errors
const originalStderr = process.stderr.write;
process.stderr.write = function(chunk, encoding, callback) {
  const str = chunk.toString();
  if (
    str.includes("wrapDynamicImport") ||
    str.includes("get_hooks") ||
    str.includes(".svelte-kit/generated/server/internal.js")
  ) {
    // Silently ignore these specific errors
    if (typeof encoding === "function") {
      encoding();
      return true;
    }
    if (callback) {
      callback();
    }
    return true;
  }
  return originalStderr.apply(process.stderr, arguments);
};

export default defineConfig({
  plugins: [sveltekit(), tailwindcss(), devtoolsJson(), examples],
  build: {
    chunkSizeWarningLimit: 1600
  },
  server: {
    port: 8080,
    strictPort: false
  },
  optimizeDeps: {
    exclude: ["flowbite-svelte"]
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
          setupFiles: ["./vitest-setup-client.ts"],
          env: {
            VITEST: "true",
            NODE_ENV: "test"
          }
        }
      },
      {
        test: {
          name: "server",
          environment: "node",
          include: ["src/**/*.{test,spec}.{js,ts}"],
          exclude: ["src/tests/**/*.{test,spec}.?(c|m)[jt]s?(x)"],
          env: {
            VITEST: "true",
            NODE_ENV: "test"
          }
        }
      }
    ],
    // Suppress console output for specific errors
    onConsoleLog(log) {
      if (
        log.includes("wrapDynamicImport") ||
        log.includes("get_hooks") ||
        log.includes(".svelte-kit/generated/server/internal.js")
      ) {
        return false;
      }
    }
  },
  define: {
    __NAME__: JSON.stringify(pkg.name),
    __VERSION__: JSON.stringify(pkg.version),
    __TIPTAP__: JSON.stringify(tiptapPackage.version),
    __TEXTEDITOR__: JSON.stringify(textEditorPackage.version),
    "process.env.VITEST": JSON.stringify("true")
  }
});
