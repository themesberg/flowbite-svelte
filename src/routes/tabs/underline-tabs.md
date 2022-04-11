---
layout: tabLayout
---

<script>
import { UnderlineTabs, Table, TableDefaultRow }from '$lib/index';
import componentProps from '../props/UnderlineTabs.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Settings",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Contacts",
    active: false,
    href: "/#",
    rel: undefined,
  },
];
</script>

<h1 class="text-3xl w-full dark:text-white pt-16">Underline Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <UnderlineTabs {tabs} />
</div>

```html
<script>
import { UnderlineTabs }from 'flowbite-svelte';
let tabs = [
  {
    name: "Profile",
    active: true,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Dashboard",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Settings",
    active: false,
    href: "/#",
    rel: undefined,
  },
  {
    name: "Contacts",
    active: false,
    href: "/#",
    rel: undefined,
  },
];
</script>

<UnderlineTabs {tabs} />
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>