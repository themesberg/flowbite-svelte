<<<<<<< HEAD
import js from '@eslint/js';
import ts from 'typescript-eslint';
import svelte from 'eslint-plugin-svelte';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

/** @type {import('eslint').Linter.Config[]} */
export default [
  js.configs.recommended,
  ...ts.configs.recommended,
=======
import eslint from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
>>>>>>> Chizaruu-update-datepicker
  ...svelte.configs['flat/recommended'],
  prettier,
  ...svelte.configs['flat/prettier'],
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
<<<<<<< HEAD
        parser: ts.parser,
        svelteFeatures: {
          experimentalGenerics: true
        }
=======
        parser: tseslint.parser
>>>>>>> Chizaruu-update-datepicker
      }
    }
  },
  {
<<<<<<< HEAD
    ignores: ['build/', '.svelte-kit/', 'dist/', 'test-results/', '*.md', '.vercel/', '.github/', 'node_modules/']
  },
  {
    rules: {
      // Note: you must disable the base rule as it can report incorrect errors
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'svelte/no-at-html-tags': 'off'
    }
  }
];
=======
    ignores: ['build/', '.svelte-kit/', 'dist/', '.vercel/', 'node_modules/']
  }
);
>>>>>>> Chizaruu-update-datepicker
