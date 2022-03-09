---
layout: doc
---

<h1 class="text-2xl w-full dark:text-white">Getting Started</h1>
<h2 class="text-xl w-full mt-8 dark:text-white">Installation</h2>
<p class="dark:text-white py-4">Install SvelteKit:</p>

```sh
npm init svelte@next sveltekit-demo 
cd sveltekit-demo
npm install 
```

<p class="dark:text-white py-4">Install Tailwind CSS:</p>

```sh
npx svelte-add@latest tailwindcss
```

<p class="dark:text-white py-4">Run it:</p>

```sh
npm run dev
```

<p class="dark:text-white py-4">You may need to install svelte-preprocess:</p>

```sh
npm i -D svelte-preprocess   
```

<p class="dark:text-white py-4">Install flowbite-svelte:</p>

```sh
npm i -D flowbite-svelte
```

<p class="dark:text-white py-4">Update tailwind.config.cjs:</p>

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

<p class="dark:text-white py-4">Now you are ready to go!</p>