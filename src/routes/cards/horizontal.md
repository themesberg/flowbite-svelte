---
layout: doc
---

<script>
  import { HorizontalCard }from '$lib/index';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { HorizontalCard } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
let link: string = '';
let rel: string = '';
let img = '/images/image-4.jpeg';
let alt: string = '';
let header = 'Lorem ipsum dolor sit ametit.';
let linkClass = 'flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700';
let imgClass = 'object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg';
let textClass = 'flex flex-col justify-between p-4 leading-normal';
let h3Class = 'mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white';
let pClass = 'mb-3 font-normal text-gray-700 dark:text-gray-400';
```

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

```html
<HorizontalCard
  img="/images/image-4.jpeg"
  header="Horizontal card"
  link="/"
>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <HorizontalCard
    img="/images/image-4.jpeg"
    header="Horizontal card"
    link="/"
  >
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam
    quos sed rem provident, aspernatur sunt illum eum ipsam quas. Sed ipsum ex
    non.
  </HorizontalCard>
</div>

```html
<HorizontalCard>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <HorizontalCard>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam
    quos sed rem provident, a
  </HorizontalCard>
</div>

<h2 class="text-2xl w-full dark:text-white py-8">Related components</h2>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/card" class="text-blue-600 hover:underline dark:text-blue-500">Default Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/cta" class="text-blue-600 hover:underline dark:text-blue-500">CTA Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/ecommerce" class="text-blue-600 hover:underline dark:text-blue-500">Ecommerce Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/horizontal" class="text-blue-600 hover:underline dark:text-blue-500">Horizontal Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/interactive" class="text-blue-600 hover:underline dark:text-blue-500">Interactive Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/list" class="text-blue-600 hover:underline dark:text-blue-500">List Card</a></p>

<p class="dark:text-white text-lg w-full"><a href="https://flowbite-svelte.vercel.app/cards/signin" class="text-blue-600 hover:underline dark:text-blue-500">Signin Card</a></p>

<h2 class="text-2xl w-full dark:text-white py-8">References</h2>

<p class="dark:text-white text-lg"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Card</a></p>