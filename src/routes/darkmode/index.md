---
layout: darkmodeLayout
---

<script>
  import {Htwo,TableProp, TableDefaultRow} from '../utils'
  import { Breadcrumb, BreadcrumbItem } from '$lib'
  import { Home } from 'svelte-heros';
  
  import componentProps from '../props/DarkMode.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Dark mode</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Dark mode</h1>

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

<Htwo label="Props" />


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

<p><a href="https://chir.ag/projects/name-that-color/" target="_blank">Find the name of the color from hex color code.</a></p>

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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>
