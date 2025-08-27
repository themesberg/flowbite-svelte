---
layout: componentLayout
title: Quickstart - Flowbite Svelte Blocks
breadcrumb_title: Quickstart
no_of_components: 0 free component
dir: quickstart
pkg: Flowbite Svelte Blocks
description: Learn how to get started with the free and open-source Flowbite Svelte Blocks component library
---

## Getting started

Learn how to get started with Flowbite Svelte Blocks by following the quickstart guide and start leveraging the interactive Svelte components coupled with Flowbite and Tailwind CSS.

### Install SvelteKit with TailwindCSS

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
npx sv create my-project
// after installation
cd my-project
```

Run a local development server by running:

```bash
pnpm dev
```

### Install Flowbite Svelte Blocks

Run the following command to install all Flowbite Svelte Blocks dependencies and libraries:

```sh
pnpm i -D flowbite-svelte flowbite-svelte-blocks flowbite-svelte-icons flowbite-typography flowbite
```

### Configuration

Update the `app.css` file from your root project folder to let the Tailwind CSS compiler know where to look for the utility classes and also set up the Flowbite plugin.

In the provided code below, you can customize the primary color by modifying the appropriate color values. To change the primary color, simply uncomment the desired color object and modify the corresponding color values as needed.

```js
@import "tailwindcss";

@custom-variant dark (&:where(.dark, .dark *));

@source './src/**/*.{html,js,svelte,ts,md}';
@source '../node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}';
@source '../node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}';
@source '../node_modules/flowbite-svelte-blocks/**/*.{html,js,svelte,ts}';

@plugin 'flowbite/plugin';

@theme {
  --z-index-100: 100;

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

@layer base {
  button, [role="button"] {
    cursor: pointer;
  }
}
```

Now you should be able to work with the Flowbite Svelte Blocks library and import components.

## Example

Add the following to `src/routes/+page.svelte` and if you see the following image, then your setting is complete.

```svelte example hideResponsiveButtons
<script>
  import { Section, Page404 } from "flowbite-svelte-blocks";
  import { Button } from "flowbite-svelte";
</script>

<Section name="page404">
  <Page404>
    {#snippet h1()}404{/snippet}
    {#snippet paragraph()}
      <p class="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
      <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page.</p>
      <Button href="/" size="lg" color="red">Back to Homepage</Button>
    {/snippet}
  </Page404>
</Section>
```
