---
layout: spinnerLayout
---

<script>
  import { SpinnerButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/SpinnerButton.json'
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
      label:'Spinners',
      href:'/spinners/'
    },
    {
      label:'Button spinner',
      href:'/spinners/button-spinner'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button Spinner</h1>

```html
<script>
  import { SpinnerButton } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Colors</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SpinnerButton />
<SpinnerButton color="blue" />
</div>

```html
<SpinnerButton />
<SpinnerButton color="blue" />
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Slot</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<SpinnerButton>Here you go ...</SpinnerButton>
<SpinnerButton color="blue" >Here you go ...</SpinnerButton>
</div>

```html
<SpinnerButton>Here you go ...</SpinnerButton>
<SpinnerButton color="blue" >Here you go ...</SpinnerButton>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>