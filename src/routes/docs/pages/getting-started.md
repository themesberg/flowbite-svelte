---
layout: componentLayout
breadcrumb_title: Getting Started - Flowbite Svelte
title: Getting Started - Flowbite Svelte
component_title: Quickstart
dir: Pages
description: How to get started with Flowbite Svelte
---

<script>
  import { A, P, List, Li } from '$lib'
</script>

You can install Flowbite-Svelte by using the <A href='/extend/flowbite-svelte-starter'>Flowbite-Svelte-Start</A> or from scratch.

## Installing from scratch

### SvelteKit

You can install SvelteKit or Svelte to start your app. For SvelteKit:

```bash example
npm create svelte@latest my-app
cd my-app
npm install
```

### Svelte

If you want to get started with Svelte:

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
npm install
```

## Install Tailwind CSS

```bash
npx svelte-add@latest tailwindcss
npm i
```

Run it:

```bash
npm run dev
```

## Install dependencies

```sh
npm i flowbite flowbite-svelte classnames @popperjs/core
```

## Update tailwind.config.cjs

```js
const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};

module.exports = config;
```

<div class="h-8" />    

Now you are ready to go! Add the following to `src/routes/+page.svelte` and if you see the following image, then your setting is complete.

```svelte example 
<script>
	import { Alert } from 'flowbite-svelte';
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>
```

## Starters

You can use one of starter repo for a quick start.

<List tag='ul' class='space-y-1 my-4'>
<Li><A href='https://github.com/shinokada/flowbite-svelte-starter'>Flowbite-SvelteKit starter</A></Li>
<Li><A href='https://github.com/ZekyTheWolf/LIST-Starter'>Laravel, Inertia, Svelte, Typescript with Flowbite starter</A></Li>
</List>