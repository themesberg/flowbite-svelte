# Flowbite Svelte

Flowbite Svelte is a UI library built from scratch to leverage Svelte 5's runes system, creating smooth, reactive components.

- [Docs](https://preview.flowbite-svelte.com/)

## Installation

Install `svelte`, `tailwindcss`, and `flowbite-svelte`, update dependencies and install the latest:

```sh
npx sv create myapp // select to install tailwindcss
cd myapp
pnpm install
pnpm run dev
pnpm i -D flowbite-svelte@next
```

Update your `src/app.css` file to include:

```js
@import 'tailwindcss';

@source '../node_modules/flowbite-svelte/dist';

@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --color-primary-50: #fff5f2;
  --color-primary-100: #fff1ee;
  --color-primary-200: #ffe4de;
  --color-primary-300: #ffd5cc;
  --color-primary-400: #ffbcad;
  --color-primary-500: #fe795d;
  --color-primary-600: #ef562f;
  --color-primary-700: #eb4f27;
  --color-primary-800: #cc4522;
  --color-primary-900: #a5371b;

  --color-secondary-50: #f0f9ff;
  --color-secondary-100: #e0f2fe;
  --color-secondary-200: #bae6fd;
  --color-secondary-300: #7dd3fc;
  --color-secondary-400: #38bdf8;
  --color-secondary-500: #0ea5e9;
  --color-secondary-600: #0284c7;
  --color-secondary-700: #0369a1;
  --color-secondary-800: #075985;
  --color-secondary-900: #0c4a6e;
}
```

## License

MIT
