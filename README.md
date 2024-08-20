# Svelte 5 UI Lib

UI library for Svelte 5

- [Docs](https://svelte-5-ui-lib.codewithshin.com/)

## Installation

After installing Svelte-5, update `svelte.config.js` to enable `runes`:

```
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [vitePreprocess({})],
  compilerOptions: {
    runes: true
  },
  kit: {
    adapter: adapter()
  }
};

export default config;
```

Install `svelte-5-ui-lib:

```
pnpm i -D svelte-5-ui-lib
```

Install tailwindcss:

```
npx svelte-add@latest tailwindcss
pnpm i
```

Add the following to tailwind.config.js:

```
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        primary: { 50: '#FFF5F2', 100: '#FFF1EE', 200: '#FFE4DE', 300: '#FFD5CC', 400: '#FFBCAD', 500: '#FE795D', 600: '#EF562F', 700: '#EB4F27', 800: '#CC4522', 900: '#A5371B' },
        secondary: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" },
      }
    }
  },
} as Config;
```

## License

MIT