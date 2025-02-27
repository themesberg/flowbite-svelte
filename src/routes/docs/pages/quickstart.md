---
layout: componentLayout
breadcrumb_title: Quickstart - Flowbite Svelte
title: Quickstart - Flowbite Svelte
component_title: Quickstart
dir: Pages
description: Learn how to get started with the free and open-source Flowbite Svelte UI component library based on the utility classes from Tailwind CSS
---

<script>
  import { A, P, List, Li } from '$lib'
  
</script>

You can install Flowbite Svelte by using the <A href='/docs/extend/flowbite-svelte-starter'>flowbite-svelte-start</A> or from scratch.

## Getting started

Learn how to get started with Flowbite Svelte by following the quickstart guide and start leveraging the interactive Svelte components coupled with Flowbite and Tailwind CSS.

### Using SvelteKit

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
npx sv create my-app
cd my-app
pnpm install
```

### Using Svelte

If you want to get started with Svelte:

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
pnpm install
```

### Install Tailwind CSS

In order to enable the utility classes from Tailwind CSS install the package using NPM:

```bash
npx sv add tailwindcss
pnpm i
```

Run a local development server by running:

```bash
pnpm dev
```

### Install Flowbite Svelte

Run the following command to install all Flowbite dependencies and libraries:

```sh
pnpm i -D flowbite-svelte flowbite
```

### Optional

Install `flowbite-svelte-icons` for the examples to work properly:

```sh
pnpm i -D flowbite-svelte-icons
```

### Configuration

*Tailwindcss v4 does not need the `tailwind.config.cjs` file.*

Update your main `css` file to support Tailwindcss and Flowbite plugin. You can as well customize the primary color by modifying the appropriate color values. 

If you use SvelteKit the main css file is `src/app.css`.

```css
@import 'tailwindcss';

@plugin 'flowbite/plugin';

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
}

@source "../node_modules/flowbite-svelte/dist";
```


Now you should be able to work with the Flowbite Svelte library and import components such as the navbar, dropdown, modal, and more.

<div class="h-8" ></div>

Now you are ready to go! Add the following to `src/routes/+page.svelte` and if you see the following image, then your setting is complete.

```svelte example
<script>
  import { Alert } from 'flowbite-svelte';
</script>

<div class="p-8">
  <Alert>
    <span class="font-medium">Info alert!</span>
    Change a few things up and try submitting again.
  </Alert>
</div>
```

## Starters

You can use one of starter repo for a quick start.

<List tag='ul' class='space-y-1 my-4'>
<Li><A href='https://github.com/shinokada/flowbite-svelte-starter'>Flowbite-SvelteKit starter</A></Li>
<Li><A href='https://github.com/ZekyTheWolf/LIST-Starter'>Laravel, Inertia, Svelte, Typescript with Flowbite starter</A></Li>
</List>
