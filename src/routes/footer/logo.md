---
layout: footerLayout
---

<script>
  import { LogoFooter, Table, TableDefaultRow } from '$lib/index'
  import componentProps from '../props/LogoFooter.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

  let site = {
    href: "/",
    name: "Flowbite Svelte",
    img: "/images/flowbite-svelte-logo-30.png",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Footer with Logo</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<LogoFooter {site} {links}/>
</div>

```html
<script>
  import {LogoFooter} from 'flowbite-svelte'
  let site = {
    href: "/",
    name: "Flowbite Svelte",
    img: "/images/flowbite-svelte-logo-30.png",
  };
  let links = [
    { name: "About", href: "/" },
    { name: "Profile", href: "/" },
    { name: "Contact", href: "/" },
  ];
</script>

<LogoFooter {site} {links}/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>