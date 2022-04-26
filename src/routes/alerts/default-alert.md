---
layout: alertLayout
---

<script>
  import { Alert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Alert.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
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
      label:'Alert default',
      href:'/alerts/default-alert'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Alert</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Set up</h2>

<p class="text-gray-900 dark:text-white py-4 text-lg">
Import Alert, BorderAlert, and InfoAlert and set variables in the script tag.
</p>

```html
<script>
  import { Alert } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Simple Alert Examples</h2>

```html
<Alert alertId="alert-blue">
    A simple info alert without a close button.
</Alert>

<Alert alertId="alert-gray" color="gray" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-green" color="green" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-red" color="red" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-purple" color="purple" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-yellow" color="yellow" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-indigo" color="indigo" closeBtn>
  A simple info alert with a close button.
</Alert>

<Alert alertId="alert-pink" color="pink" closeBtn>
  A simple info alert with a close button.
</Alert>
```

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Alert alertId="alert-blue">
    A simple info alert without a close button.
  </Alert>

  <Alert alertId="alert-gray" color="gray" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-green" color="green" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-red" color="red" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-purple" color="purple" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-yellow" color="yellow" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-indigo" color="indigo" closeBtn>
    A simple info alert with a close button.
  </Alert>

  <Alert alertId="alert-pink" color="pink" closeBtn>
    A simple info alert with a close button.
  </Alert>
</div>

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>