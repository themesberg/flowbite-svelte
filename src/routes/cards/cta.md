---
layout: doc
---

<script>
  import { CtaCard }from '$lib/index';
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">CTA Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```html
<script>
  import { CtaCard } from "flowbite-svelte";
  let title = "Be The First";
  let headColor = "gray";
  let btns = [
    {
      size: "base",
      name: "Download it",
      type: "purple",
      href: "/about",
      rel: "external",
      rounded: true,
    },
    {
      size: "base",
      name: "Get in on",
      type: "green-outline",
      href: "/#",
      rel: "external",
    },
  ];
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">CTA Card</h2>

```html
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
```

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
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