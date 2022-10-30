---
layout: componentLayout
title: Svelte Dark Mode - Flowbite
breadcrumb_title: Dark mode
dir: Components
description: Learn how to configure and build a dark mode switcher for Tailwind CSS using Flowbite and start developing with the components from the library
---


<MetaTag {breadcrumb_title} {title} {dir} {description}/>

<script>
  import {Htwo,TableProp, TableDefaultRow, CompoDescription , MetaTag } from '../utils'
  
  import { Breadcrumb, BreadcrumbItem, Heading, P, A } from '$lib'
  // Props table
  import { props as items} from '../props/DarkMode.json'
	let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb class="pt-16 py-8">
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>{dir}</BreadcrumbItem>
  <BreadcrumbItem>{breadcrumb_title}</BreadcrumbItem>
</Breadcrumb>

<Heading class="mb-2" tag="h1" customSize="text-3xl">{title}</Heading>

<CompoDescription>{description}</CompoDescription>

<p class=" dark:text-white py-8">The best place to import is in the __layout.svelte.</p>

```html
<script>
import { DarkMode } from "flowbite-svelte";
</script>

<DarkMode />
```

<p>Add the following to the body tag:</p>

```html
<!-- src/app.html -->
<body class="bg-white dark:bg-gray-800">
	<div>%svelte.body%</div>
</body>
```

<p>Add the following to `tailwind.config.cjs`:</p>

```cjs
const config = {
	...
  darkMode: 'class',
};
```

<p>The component has the following props, type, and default values:</p>

```js
let btnClass: string = "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 fixed left-2 top-16 z-50"
```

<p>Set your CSS and add it to the prop:</p>

```html
<script>
import { DarkMode } from "flowbite-svelte";

let btnClass="Add your class here"
</script>

<DarkMode {btnClass} />
```

<Htwo label="How to change Dark mode color" />

<p><a href="https://chir.ag/projects/name-that-color/" target="_blank" rel="noreferrer">Find the name of the color from hex color code.</a></p>

<p>Update tailwind.config.cjs:</p>

```js
// ...
  theme: {
    colors: {
      'bigstone': '#173242',
    },
		extend: {}
	},
// ...
```

<p>Update the body class</p>

```html
<!-- src/app.html -->
<body class="bg-white dark:bg-bigstone">
	<div>%svelte.body%</div>
</body>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <A href="/pages/types">types 
 page</A> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<Htwo label="References" />

<P>
  <A href="https://flowbite.com/docs/customize/dark-mode/" target="_blank" rel="noreferrer" class="link"
    >Flowbite Dark mode</A
  >
</P>
		