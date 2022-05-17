---
layout: docLayout
---
<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Breadcrumb } from '$lib/index'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Getting started',
      href:'/getting-started'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Getting Started</h1>

<p>You can install Flowbite-Svelte by using the Flowbite-Svelte-Start or from scrach.</p>

<Htwo label="Installing from scrach" />

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

<p>Install flowbite and flowbite-svelte:</p>

```sh
npm i -D flowbite flowbite-svelte
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

<Htwo label="Installing Flowbite-Svelte-Starter" />

<p>Flowbite-Svelte-Starter comes with the followings:</p>


<span class="w-full dark:text-white">Svelte</span>
<span class="w-full dark:text-white">SvelteKit</span>
<span class="w-full dark:text-white">Tailwind CSS</span>
<span class="w-full dark:text-white">Flowbite</span>
<span class="w-full dark:text-white">Flowbite-Svelte</span>
<span class="w-full dark:text-white">ESlint</span>
<span class="w-full dark:text-white">Typescript</span>
<span class="w-full dark:text-white">Playwright</span>
<span class="w-full dark:text-white">Prettier</span>
<span class="w-full dark:text-white">Svelte-heros(Heroicons)</span>
<span class="w-full dark:text-white">Darkmode activated</span>

<h3>You need to run git clone the repo</h3>

```sh
git clone git@github.com:shinokada/flowbite-svelte-starter.git my-demo
cd my-demo
pnpm i
pnpm run dev
```