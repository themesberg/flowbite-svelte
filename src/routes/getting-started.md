---
layout: doc
---

<h1 class="text-2xl w-full">Getting Started</h1>
<h2 class="text-xl w-full">Installation</h2>
Install SvelteKit.

```sh
npm init svelte@next sveltekit-demo $ cd sveltekit-demo
npm install 
```

Install Tailwind CSS and Flowbite.

```sh
npx svelte-add@latest tailwindcss
npm i flowbite 
```

Install svelte-flow.

```sh
npm i -D svelte-flow 
```

Add the following in the script tag in the __layout.svelte :

```html
<script>
  import "../app.css";
  import "flowbite/dist/flowbite.css";
</script>
```

Add the following in the script tag in the __layout.svelte :

```html
<div class="mx-auto p-2">
  <slot />
</div>
```

And modify the src/app.html adding flowbite.js as the following:

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

<div class="container mt-4 flex flex-wrap mx-auto pb-48" />
