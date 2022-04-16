---
layout: footerLayout
---

<script>
  import { SimpleFooter, Table, TableDefaultRow } from '$lib/index'
  import componentProps from '../props/SimpleFooter.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Simple Footer</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SimpleFooter {links} {site} />
</div>

```html
<script>
  import {SimpleFooter} from 'flowbite-svelte'
  let site = {
    href: "/",
    name: "Flowbite Svelte",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<SimpleFooter {links} {site}/>
```


<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>