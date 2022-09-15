---
layout: pageLayout
dir: Pages
title: Getting Started
---
<script>
  import { Htwo, ExampleDiv } from '../utils'
  import { A, P, Breadcrumb, BreadcrumbItem, Alert, Heading } from '$lib'
  
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<P class='mb-8'>You can install Flowbite-Svelte by using the <A href='/extend/flowbite-svelte-starter'>Flowbite-Svelte-Start</A> or from scratch.</P>

<Htwo label="Installing from scratch" />

<h3 class='text-xl w-full dark:text-white py-4'>SvelteKit or Svelte</h3>

<p>You can install SvelteKit or Svelte to start your app. For SvelteKit:</p>

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

<p>OR if you want to get started with Svelte:</p>

```bash
npm create vite@latest myapp -- --template svelte
cd myapp
npm install
```

<h3 class='text-xl w-full dark:text-white py-4'>Install Tailwind CSS</h3>

```bash
npx svelte-add@latest tailwindcss
npm i
```

<p>Run it:</p>

```bash
npm run dev
```

<h3 class='text-xl w-full dark:text-white py-4'>Install dependencies</h3>

```sh
npm i -D flowbite flowbite-svelte classnames @popperjs/core
```

<h3 class='text-xl w-full dark:text-white py-4'>Update tailwind.config.cjs</h3>

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

<h3 class='text-xl w-full dark:text-white py-4'>Add an example</h3>

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