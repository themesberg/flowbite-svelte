---
layout: docLayout
---
<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Breadcrumb, BreadcrumbItem } from '$lib'
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
npm init svelte@next sveltekit-demo 
cd sveltekit-demo
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
npm i -D flowbite flowbite-svelte svelte-heros
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

<p>Now you are ready to go!</p>

