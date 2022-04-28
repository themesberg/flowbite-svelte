---
layout: spinnerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Button, Spinner, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Button.json'
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
      label:'Buttons',
      href:'/buttons/'
    },
    {
      label:'Loader button',
      href:'/buttons/button-loader'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button loader</h1>

```html
<script>
	import { Button, Spinner } from 'flowbite-svelte';
</script>
```

<Htwo label="Loaders" />

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">

<Button textSize="text-sm" btnColor="light" ><Spinner size="4" currentFill="#E5E7EB" currentColor="#1C64F2" />Loading ...</Button>
<Button textSize="text-sm"><Spinner size="4" currentFill="#E5E7EB" currentColor="#fff" />Loading ...</Button>

</div>

```html
<Button textSize="text-sm" btnColor="light"><Spinner size="4" currentFill="#E5E7EB" currentColor="#1C64F2" />Loading ...</Button>
<Button textSize="text-sm"><Spinner size="4" currentFill="#E5E7EB" currentColor="#fff" />Loading ...</Button>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
