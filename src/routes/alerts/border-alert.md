---
layout: alertLayout
---

<script>
  import { BorderAlert, Table, TableDefaultRow, Breadcrumb }from '$lib/index';
  import componentProps from '../props/BorderAlert.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Border Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Set up</h2>

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```html
<script>
  import { BorderAlert } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Border Alert Examples</h2>

```html
<BorderAlert color="blue">
  A border alert without the close button.
</BorderAlert>

<BorderAlert color="gray">
  A border alert without the close button.
</BorderAlert>

<BorderAlert color="green">
  A border alert without the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-1" color="yellow" closeBtn>
  A border alert with the close button.
</BorderAlert>

<BorderAlert alertId="border-alert-2" color="red" closeBtn>
  A border alert with the close button.
</BorderAlert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <BorderAlert color="blue">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="gray">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert color="green">
    A border alert without the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-1" color="yellow" closeBtn>
    A border alert with the close button.
  </BorderAlert>

  <BorderAlert alertId="border-alert-2" color="red" closeBtn>
    A border alert with the close button.
  </BorderAlert>
</div>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
