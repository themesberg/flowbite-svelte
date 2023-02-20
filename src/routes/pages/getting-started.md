---
layout: pageLayout
breadcrumb_title: Getting Started
title: Getting Started
dir: Pages
description: Flowbite-Svelte Getting Started page
---
<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import { Htwo, ExampleDiv , MetaTag } from '../utils'
  import { A, P, List, Li, Breadcrumb, BreadcrumbItem, Alert, Heading } from '$lib'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<P class='mb-8'>You can install Flowbite-Svelte by using the <A href='/extend/flowbite-svelte-starter'>Flowbite-Svelte-Start</A> or from scratch.</P>

<Htwo label="Installing from scratch" />

<h3 class='text-xl w-full dark:text-white py-4'>SvelteKit</h3>

<p>You can install SvelteKit or Svelte to start your app. For SvelteKit:</p>

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

<h3 class='text-xl w-full dark:text-white py-4'>Svelte</h3>

<p>If you want to get started with Svelte:</p>

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
npm install
```

<Htwo label="Install Tailwind CSS"/>

```bash
npx svelte-add@latest tailwindcss
npm i
```

<p>Run it:</p>

```bash
npm run dev
```

<Htwo label="Install dependencies" />

```sh
npm i flowbite flowbite-svelte classnames @popperjs/core
```

<Htwo label="Update tailwind.config.cjs"/>

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

<p>Now you are ready to go! Add the following to `src/routes/+page.svelte`.</p>

```html
<script>
	import { Alert } from 'flowbite-svelte';
</script>

<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>
```

If you see the following image, then your setting is complete.

<ExampleDiv>
<div class="p-8">
	<Alert>
		<span class="font-medium">Info alert!</span> Change a few things up and try submitting again.
	</Alert>
</div>
</ExampleDiv>

<Htwo label="Starters" />

You can use one of starter repo for a quick start.

<List tag='ul' class='space-y-1 my-4'>
<Li><A href='https://github.com/shinokada/flowbite-svelte-starter'>Flowbite-SvelteKit starter</A></Li>
<Li><A href='https://github.com/ZekyTheWolf/LIST-Starter'>Laravel, Inertia, Svelte, Typescript with Flowbite starter</A></Li>
</List>