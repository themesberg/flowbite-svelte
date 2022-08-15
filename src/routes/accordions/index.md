---
layout: accordionLayout
---

<script>
  import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
  import { Home, ArrowCircleUp, ArrowCircleDown, Archive, Beaker } from 'svelte-heros'
  import { AccordionItem, AccordionFlush, Breadcrumb, BreadcrumbItem } from '$lib'
  
  import accordionProps from '../props/AccordionItem.json'
  import accordionProps2 from '../props/AccordionFlush.json'
   // Props table
  let items = accordionProps.props
  let items2 = accordionProps2.props

	let propHeader = ['Name', 'Type', 'Default']
  let slotHeader = ['Name', 'Description']

  let slotItems = [['header', 'Table header slot'],['body','Table body slot']]
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let icons={
  up:ArrowCircleUp,
  down:ArrowCircleDown
}
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Accordions</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Accordion</h1>

<CompoDescription>Use the accordion component to show hidden information based on the collapse and expand state of the child elements using data attribute options</CompoDescription>

<ExampleDiv>
<GitHubSource href="accordion/AccordionItem.svelte">AccordionItem</GitHubSource>
<GitHubSource href="accordion/AccordionFlush.svelte">AccordionFlush</GitHubSource>
</ExampleDiv>

The accordion component is a collection of vertically collapsing header and body elements that can be used to show and hide information based on the Tailwind CSS utility classes and JavaScript from Flowbite.

A popular use case would be the “Frequently Asked Questions” section of a website or page when you can show questions and answers for each child element.

<Htwo label="Setup" />

```html
<script>
  import { AccordionItem, AccordionFlush } from 'flowbite-svelte'
  // if you are using icons
  import { Home, ArrowCircleUp, ArrowCircleDown, Archive, Beaker } from 'svelte-heros'
</script>
```

<Htwo label="Default accordion" />

Use id=1,2,3,.. to add top and bottom border.

<ExampleDiv>
  <AccordionItem id="1">
    <h2 slot="header">My Header 1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
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
    <h2 slot="header">My Header 2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
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
</ExampleDiv>

```html
<script>
  import { AccordionItem } from "flowbite-svelte";
</script>

<AccordionItem id="1">
  <h2 slot="header">My Header 1</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet ...
    </p>
    ...
  </div>
</AccordionItem>
<AccordionItem id="2">
  <h2 slot="header">My Header 2</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet ...
    </p>
    ...
  </div>
</AccordionItem>
```

<Htwo label="Always open" />

Use the `isOpen` prop to make an item open on mount.

<ExampleDiv>
  <AccordionItem id="1" isOpen>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
  <AccordionItem id="2">
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
</ExampleDiv>

```html
<AccordionItem id="1" isOpen>
  <h2 slot="header">Header 2-1</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
<AccordionItem id="2">
  <h2 slot="header">Header 2-2</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
```


<Htwo label="Color option" />

Use the `color` prop to add color.

<ExampleDiv>
  <AccordionItem id="1" color>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
  <AccordionItem id="2" color>
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
</ExampleDiv>

```html
<AccordionItem id="1" color>
  <h2 slot="header">Header 2-1</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
<AccordionItem id="2" color>
  <h2 slot="header">Header 2-2</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo...
    </p>
  </div>
</AccordionItem>
```

<Htwo label="Flush accordion" />

Use `AccordionFlush` component to remove the rounded borders.

<ExampleDiv>
  <AccordionFlush id="1" >
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionFlush>
  <AccordionFlush id="2">
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionFlush>
</ExampleDiv>

```html
<script>
  import { AccordionFlush } from 'flowbite-svelte'
</script>

<AccordionFlush id="1" >
  <h2 slot="header">Header 2-1</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionFlush>
<AccordionFlush id="2">
  <h2 slot="header">Header 2-2</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionFlush>
```

<Htwo label="Arrow style" />

Use the `icons` prop to set up and down icons.

<ExampleDiv>
  <AccordionItem id="1" {icons}>
    <h2 slot="header">Header 2-1</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
  <AccordionItem id="2" {icons}>
    <h2 slot="header">Header 2-2</h2>
    <div slot="body">
      <p class="mb-2 text-gray-500 dark:text-gray-400">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
        necessitatibus sint explicabo ...
      </p>
    </div>
  </AccordionItem>
</ExampleDiv>

```html
<script>
  import {ArrowCircleUp, ArrowCircleDown} from 'svelte-heros'
  let icons={
    up:ArrowCircleUp,
    down:ArrowCircleDown
  }
</script>

<AccordionItem id="1" {icons}>
  <h2 slot="header">Header 2-1</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
<AccordionItem id="2" {icons}>
  <h2 slot="header">Header 2-2</h2>
  <div slot="body">
    <p class="mb-2 text-gray-500 dark:text-gray-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo ab
      necessitatibus sint explicabo ...
    </p>
  </div>
</AccordionItem>
```


<Htwo label="AccordionItem: slot names" />

```js
header
body
```

<Htwo label="Icon Accordion" />

<p class="dark:text-white w-full py-4">Add id 1,2,3,... to AccordionItem component. 
<p class="dark:text-white w-full py-4">Install svelte-heros.

```sh
npm i svelte-heros
```

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
</ExampleDiv>

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

<Htwo label="Props" />

The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.

<h3 class='text-xl w-full dark:text-white py-4'>AccordionItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>AccordionFlush</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<Htwo label="Slots" />

<h3 class='text-xl w-full dark:text-white py-4'>AccordionItem, AccordionFlush</h3>

<TableProp header={slotHeader} {divClass} {theadClass}>
  <TableDefaultRow items={slotItems} rowState='hover' />
</TableProp>

