---
layout: alertLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { BorderAlert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/BorderAlert.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Alerts',
      href:'/alerts/'
    },
    {
      label:'Border alert',
      href:'/alerts/border-alert'
    }
  ]
</script>

<Breadcrumb {crumbs}/>
<h1 class="text-3xl w-full dark:text-white py-8">Border Alert</h1>

<Htwo label="Set up" />

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```html
<script>
  import { BorderAlert } from "flowbite-svelte";
</script>
```

<Htwo label="Examples" />

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
