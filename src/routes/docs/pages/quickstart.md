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
npm create svelte@latest my-app
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
npx svelte-add@latest tailwindcss
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

Update the `tailwind.config.cjs` file from your root project folder to let the Tailwind CSS compiler know where to look for the utility classes and also set up the Flowbite plugin.

In the provided code below, you can customize the primary color by modifying the appropriate color values. To change the primary color, simply uncomment the desired color object and modify the corresponding color values as needed.

```js
import flowbitePlugin from 'flowbite/plugin'

import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],
  darkMode: 'selector',
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
	},

	plugins: [flowbitePlugin]
} as Config;
```

Now you should be able to work with the Flowbite Svelte library and import components such as the navbar, dropdown, modal, and more.

<div class="h-8" />

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
