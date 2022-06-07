---
layout: accordionLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import {ArrowCircleUp, ArrowCircleDown} from 'svelte-heros'
  import { AccordionItem, AccordionFlush, Table, TableDefaultRow, Breadcrumb } from "$lib/index";
  import accordionProps from '../props/AccordionItem.json'
  import accordionProps2 from '../props/AccordionFlush.json'
   // Props table
  let items = accordionProps.props
  let items2 = accordionProps2.props

	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

let icons={
  up:ArrowCircleUp,
  down:ArrowCircleDown
}
 let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Accordions',
      href:'/accordions/'
    },
    {
      label:'Accordion default',
      href:'/accordions/default'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Accordion</h1>

<Htwo label="Default accordion" />

<p>Use id=1,2,3,.. to add top and bottom border.</p>

<ExampleDiv>
  <AccordionItem id="1">
    <h2 slot="header">My Header 1</h2>
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
    <h2 slot="header">My Header 2</h2>
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

<p>Use the `isOpen` prop to make an item open on mount.</p>

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

<p>Use the `color` prop to add color.</p>

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

<p>Use `AccordionFlush` component to remove the rounded borders.</p>

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

<p>Use the `icons` prop to set up and down icons.</p>

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>AccordionItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

<h3>AccordionFlush</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>
