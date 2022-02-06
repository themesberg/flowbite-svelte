---
layout: doc
---

<h1 class="text-2xl w-full dark:text-white">Getting Started</h1>
<h2 class="text-xl w-full mt-8 dark:text-white">Installation</h2>
<p class="dark:text-white">Install SvelteKit.</p>

```sh
npm init svelte@next sveltekit-demo $ cd sveltekit-demo
npm install 
```

<p class="dark:text-white">Install Tailwind CSS and Flowbite.</p>

```sh
npx svelte-add@latest tailwindcss
npm i flowbite 
```

<p class="dark:text-white">Install svelte-flow.</p>

```sh
npm i -D svelte-flow 
```

<p class="dark:text-white">Add the following in the script tag in the __layout.svelte :</p>

```html
<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
</script>
```

<p class="dark:text-white">Add the following in the script tag in the __layout.svelte :</p>

```html
<div class="mx-auto p-2">
  <slot />
</div>
```

<p class="dark:text-white">And modify the src/app.html adding flowbite.js as the following:</p>

```html
<!DOCTYPE html />
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="description" content="" />
    <link rel="icon" href="%svelte.assets%/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    %svelte.head%
  </head>
  <body>
    <div id="svelte">%svelte.body%</div>
    <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js">
  </body>
</html>
```


