---
layout: docLayout
---
<script>
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
<h2 class="text-2xl w-full mt-8 dark:text-white py-4">Installation</h2>
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
