---
layout: componentLayout
title: Quickstart - Flowbite Svelte Blocks
breadcrumb_title: Quickstart
no_of_components: 0 free component
dir: pages
description: Learn how to get started with the free and open-source Flowbite Svelte Blocks component library
---

## Getting started

Learn how to get started with Flowbite Svelte Blocks by following the quickstart guide and start leveraging the interactive Svelte components coupled with Flowbite and Tailwind CSS.

### Install SvelteKit

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
npm create svelte@latest my-app
cd my-app
pnpm i
```

### Install Tailwind CSS

In order to enable the utility classes from Tailwind CSS install the package using NPM:

```bash
npx svelte-add@latest tailwindcss
pnpm i
```

Run a local development server by running:

```bash
pnpm dev
```

### Install Flowbite Svelte Blocks

Run the following command to install all Flowbite Svelte Blocks dependencies and libraries:

```sh
pnpm i -D flowbite-svelte flowbite-svelte-blocks flowbite-svelte-icons flowbite-typography
```

### Configuration

Update the `tailwind.config.cjs` file from your root project folder to let the Tailwind CSS compiler know where to look for the utility classes and also set up the Flowbite plugin.

In the provided code below, you can customize the primary color by modifying the appropriate color values. To change the primary color, simply uncomment the desired color object and modify the corresponding color values as needed.

```js
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin'), require('flowbite-typography')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        // flowbite-svelte
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      }
    }
  }
};

module.exports = config;
```

Now you should be able to work with the Flowbite Svelte Blocks library and import components.

<div class="h-8" />

Add the following to `src/routes/+page.svelte` and if you see the following image, then your setting is complete.

```svelte example
<script>
  import { Section, Page404 } from 'flowbite-svelte-blocks';
  import { Button } from 'flowbite-svelte';
</script>

<Section name="page404">
  <Page404>
    <svelte:fragment slot="h1">404</svelte:fragment>
    <svelte:fragment slot="paragraph">
      <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
      <Button href="/" size="lg" color="red">Back to Homepage</Button>
    </svelte:fragment>
  </Page404>
</Section>
```
