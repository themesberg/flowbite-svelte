---
layout: accordionLayout
---

<script>
  import { Accordion }from '$lib/index';
  import { AccordionItem }from '$lib/index';
  import { ArchiveIconOutline, BeakerIconOutline } from "@codewithshin/svelte-heroicons";
</script>

<h1 class="text-3xl w-full dark:text-white">Icon Accordion</h1>

<p class="dark:text-white w-full py-4">Add id 1,2,3,... to AccordionItem component.</p> 
<p class="dark:text-white w-full py-4">Install @codewithshin/svelte-heroicons.</p>

```sh
npm i @codewithshin/svelte-heroicons
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the same props, type, and default values as <a href="https://flowbite-svelte.vercel.app/accordions/default" class="text-blue-600 hover:underline dark:text-blue-500">default</a>.</p>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div
  class="rounded-xl bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Accordion>
    <AccordionItem id="1">
      <h2 slot="header">
        <span class="flex"
          ><span class="mr-2"><ArchiveIconOutline /></span> My Header 1</span
        >
      </h2>
      <div slot="body">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Check out this guide to learn how to <a
            href="/"
            target="_blank"
            class="text-blue-600 dark:text-blue-500 hover:underline"
            >get started</a
          > and start developing websites even faster with components on top of Tailwind
          CSS.
        </p>
      </div>
    </AccordionItem>
    <AccordionItem id="2">
      <h2 slot="header"><span class="flex "
          ><span class="mr-2"><BeakerIconOutline /></span> My Header 2</span
        ></h2>
      <div slot="body">
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
          necessitatibus sint explicabo, atque temporibus rem iusto, dicta
          voluptatem molestias ex quibusdam ipsa omnis laboriosam deleniti ipsum
          nisi quis perspiciatis.
        </p>
        <p class="mb-2 text-gray-500 dark:text-gray-400">
          Learn more about these technologies:
        </p>
        <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
          <li>
            <a
              href="/"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Lorem ipsum</a
            >
          </li>
          <li>
            <a
              href="https://tailwindui.com/"
              rel="nofollow"
              target="_blank"
              class="text-blue-600 dark:text-blue-500 hover:underline"
              >Tailwind UI</a
            >
          </li>
        </ul>
      </div>
    </AccordionItem>
  </Accordion>
</div>


```html
<script>
  import { Accordion } from "flowbite-svelte";
  import { AccordionItem } from "flowbite-svelte";
  import { ArchiveIconOutline, BeakerIconOutline } from "@codewithshin/svelte-heroicons";
</script>

<Accordion>
  <AccordionItem id="1">
    <h2 slot="header">
      <span class="flex">
        <span class="mr-2"><ArchiveIconOutline /></span> 
          My Header 1
      </span>
    </h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing ...
      </p>
      ...
    </div>
  </AccordionItem>
  <AccordionItem id="2">
    <h2 slot="header"><span class="flex ">
      <span class="mr-2"><BeakerIconOutline /></span> 
        My Header 2
      </span>
    </h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing ...
      </p>
      ...
    </div>
  </AccordionItem>
</Accordion>
```
