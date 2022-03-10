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

<h1 class="text-3xl w-full dark:text-white">CTA Card</h1>

<h2 class="text-2xl w-full dark:text-white">Set up</h2>

```svelte
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

<h1 class="text-3xl w-full dark:text-white">CTA Card</h1>

```svelte
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
```

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<CtaCard {btns} {title} {headColor}>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt libero
  dicta ex, suscipit, qui beatae in odio corrupti est quis quibusdam
  explicabo non atque!
</CtaCard>
</div>

<h1 class="text-3xl w-full dark:text-white py-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Card</a></p>