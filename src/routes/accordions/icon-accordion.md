---
layout: accordionLayout
---

<script>
  import { Accordion, AccordionItem, Table, TableDefaultRow }from '$lib/index';
  import { ArchiveIconOutline, BeakerIconOutline } from "@codewithshin/svelte-heroicons";
  import accordionProps from '../props/AccordionDefault.json'
  import accordionItemProps from '../props/AccordionItem.json'
  // Props table
  export let items = accordionProps.props
  export let items2 = accordionItemProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white">Icon Accordion</h1>

<p class="dark:text-white w-full py-4">Add id 1,2,3,... to AccordionItem component.</p> 
<p class="dark:text-white w-full py-4">Install @codewithshin/svelte-heroicons.</p>

```sh
npm i @codewithshin/svelte-heroicons
```

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

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3 class="text-xl mt-8 dark:text-white py-4">AccordionDefault</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>

<h3 class="text-xl mt-8 dark:text-white py-4">AccordionItem</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>
