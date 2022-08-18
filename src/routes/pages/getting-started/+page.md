---
layout: docLayout
---
<script>
  import { Htwo, ExampleDiv } from '../../utils'
  import { Breadcrumb, BreadcrumbItem, Alert } from '$lib'
  import { Home } from 'svelte-heros'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Getting started</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Getting Started</h1>

<p>You can install Flowbite-Svelte by using the Flowbite-Svelte-Start or from scratch.</p>

<Htwo label="Installing from scratch" />

<p>Install SvelteKit:</p>

```bash
npm create svelte@latest my-app
cd my-app
npm install
```

<p>Install Tailwind CSS:</p>

```bash
npx svelte-add@latest tailwindcss
npm i
```

<p>Run it:</p>

```bash
npm run dev
```

<p>Install flowbite, flowbite-svelte, and svelte-heros:</p>

```sh
npm i -D flowbite flowbite-svelte svelte-heros @floating-ui/dom
```

<p>Update tailwind.config.cjs:</p>

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