---
layout: accordionLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { AccordionItem, Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros';
  import { Archive, Beaker } from "svelte-heros";
  import accordionProps from '../props/AccordionItem.json'
  // Props table
  export let items = accordionProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/accordions">Accordions</BreadcrumbItem>
  <BreadcrumbItem>Icon accordions</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Icon Accordion</h1>

<Htwo label="Examples" />

<p class="dark:text-white w-full py-4">Add id 1,2,3,... to AccordionItem component.</p> 
<p class="dark:text-white w-full py-4">Install svelte-heros.</p>

```sh
npm i svelte-heros
```

<Htwo label="Examples" />

<ExampleDiv>
  <AccordionItem id="1">
    <h2 slot="header" class="text-base p-0 m-0">
      <span class="flex"
        ><span class="mr-2"><Archive /></span> My Header 1</span
      >
    </h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo...
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
    <h2 slot="header" class="text-base m-0 p-0"><span class="flex "
        ><span class="mr-2"><Beaker /></span> My Header 2</span
      ></h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo...
      </p>
    </div>
  </AccordionItem>


```html
<script>
  import { Accordion } from "flowbite-svelte";
  import { AccordionItem } from "flowbite-svelte";
  import { Archive, Beaker } from "svelte-heros";
</script>

<AccordionItem id="1">
  <h2 slot="header">
    <span class="flex">
      <span class="mr-2"><Archive /></span> 
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
    <span class="mr-2"><Beaker /></span> 
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
```
</ExampleDiv>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

