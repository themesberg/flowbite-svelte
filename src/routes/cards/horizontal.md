---
layout: doc
---

<script>
  import { HorizontalCard }from '$lib/index';
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Card</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

```svelte
<script>
  import { HorizontalCard } from "flowbite-svelte";
</script>
```

<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Card</h1>

```svelte
<HorizontalCard
  img="/images/image-4.jpeg"
  header="Horizontal card"
  link="/"
>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
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

```svelte
<HorizontalCard>
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint.
</HorizontalCard>
```

<div class="container flex flex-wrap justify-center rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <HorizontalCard>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam sint,iam
    quos sed rem provident, a
  </HorizontalCard>
</div>

<h1 class="text-3xl w-full dark:text-white py-8">References</h1>

<p class="dark:text-white text-base"><a href="https://flowbite.com/docs/components/card/" target="_blank" class="text-blue-600 hover:underline dark:text-blue-500">- Flowbite Card</a></p>