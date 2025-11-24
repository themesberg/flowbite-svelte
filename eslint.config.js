import js from "@eslint/js";
import ts from "typescript-eslint";
import svelte from "eslint-plugin-svelte";
import prettier from "eslint-config-prettier";
import globals from "globals";

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
  ...svelte.configs["flat/recommended"],
  prettier,
  ...svelte.configs["flat/prettier"],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
        svelteFeatures: {
          experimentalGenerics: true
        }
      }
    }
  },
  {
    ignores: [
      "build/",
      ".svelte-kit/",
      "dist/",
      "test-results/",
      "*.md",
      "node_modules/",
      ".vercel/",
      "src/routes/**/*", // Exclude SvelteKit routes from library linting
      "!src/routes/docs-examples/**/*", // But include docs-examples for linting
      "src/params/**/*",
      "src/hooks.server.ts",
      "src/app.html",
      "**/*.svelte.ts", // Svelte 5 runes files - parser has issues with them
      "**/*.svelte.js" // Svelte 5 runes files
    ]
  },
  {
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "svelte/no-at-html-tags": "off",
      // This rule is for SvelteKit apps, not component libraries
      "svelte/no-navigation-without-resolve": "off",
      // Allow Object.prototype methods (common pattern)
      "no-prototype-builtins": "off",
      // Allow writable $state when needed (not all cases fit $derived)
      "svelte/prefer-writable-derived": "off"
    }
  }
];
