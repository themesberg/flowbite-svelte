---
layout: componentLayout
title: Svelte Accordion - Flowbite
breadcrumb_title: Accordion
dir: Components
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib';
  // Props 
  import {props as accordionProps} from '../props/Accordion.json'
  import {props as accordionItemProps} from '../props/AccordionItem.json'
	let propHeader = ['Name', 'Type', 'Default']
  let slotHeader = ['Name', 'Description']
  // Slots
  let slotItems = [['default', 'Place for AccordionItems']]
  let slotItems2 = [['header', 'Table header slot'],['body','Table body slot'],['arrowup', 'Icon to close an accordion item'],['arrowdown','Icon to open an accordion item']]

	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pb-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options</CompoDescription>

<ExampleDiv>
<GitHubSource href="accordion/Accordion.svelte">Accordion</GitHubSource>
<GitHubSource href="accordion/AccordionItem.svelte">AccordionItem</GitHubSource>
</ExampleDiv>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

<Htwo label="Setup" />

```html
<script>
  import { AccordionItem, Accordion } from 'flowbite-svelte'
</script>
```

<Htwo label="Default accordion" />

Use the `single={true}` (default value) to collapse every other child element when expanding a single one.

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>
<Accordion>
  <AccordionItem>
    <h2 slot="header">My Header 1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header">My Header 2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
      <ul class="list-disc pl-5 dark:text-gray-400 text-gray-500">
        <li><a href="/" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline" >Lorem ipsum</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Always open" />

Use the `open` prop to make an item open on mount.

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>

<Accordion>
  <AccordionItem open>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Color option" />

Use the `color` prop to add color.

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>

<Accordion
  activeClasses="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800"
  inactiveClasses="text-gray-500 dark:text-gray-400 hover:bg-blue-100 dark:hover:bg-gray-800">
  <AccordionItem>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Flush accordion" />

Use `flush` prop to remove the rounded borders.

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>

<Accordion flush>
  <AccordionItem>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Arrow style" />

Use the `arrowup` and `arrowdown` slots to set up and down icons.

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>

<Accordion>
  <AccordionItem>
    <h2 slot="header">Header 2-1</h2>
    <div slot="arrowup">
      <svg class="w-6 h-6 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>
    </div>
    <div slot="arrowdown">
      <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>
    </div>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header">Header 2-2</h2>
    <div slot="arrowup">
      <svg class="w-6 h-6 shrink-0 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>
    </div>
    <div slot="arrowdown">
      <svg class="w-6 h-6 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"/></svg>
    </div>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo ...</p>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Icon Accordion" />

```svelte example hideScript
<script>
  import {AccordionItem, Accordion} from 'flowbite-svelte'
</script>

<Accordion>
  <AccordionItem>
    <h2 slot="header" class="text-base flex gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"/></svg>
      <span> My Header 1</span>
    </h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sint explicabo...</p>
      <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/" target="_blank" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start  websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </AccordionItem>
  <AccordionItem>
    <h2 slot="header" class="text-base flex gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5"/></svg>
      <span> My Header 2</span>
    </h2>
    <div slot="body"><p class="mb-2 text-gray-500 dark:text-gray-400"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab necessitatibus sintexplicabo...</p>
    </div>
  </AccordionItem>
</Accordion>
```

<Htwo label="Props" />

The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>Accordion</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={accordionProps} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>AccordionItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={accordionItemProps} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<h3 class='text-xl w-full dark:text-white py-4'>Accordion</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>AccordionItem</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems2} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P><A href="https://flowbite.com/docs/components/accordion/" target="_blank" class="link">Flowbite Accordion</A></P>