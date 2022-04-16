---
layout: spinnerLayout
---

<script>
  import { Spinner, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Spinner.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Spinner</h1>


```html
<script>
  import { Spinner } from "flowbite-svelte";
</script>
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Colors</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
</div>

```html
<Spinner />
<Spinner color="gray" />
<Spinner color="green" />
<Spinner color="red" />
<Spinner color="yellow" />
<Spinner color="pink" />
<Spinner color="purple" />
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Sizing</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner size="w-4 h-4" />
<Spinner size="w-6 h-6" />
<Spinner size="w-8 h-8" />
<Spinner size="w-16 h-16" />
</div>

```html
<Spinner size="w-4 h-4"/>
<Spinner size="w-6 h-6" />
<Spinner size="w-8 h-8"/>
<Spinner size="w-16 h-16"/>
```


<h2 class="text-2xl mt-8 dark:text-white py-8">Alignment</h2>

<div class="container w-full rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Spinner align="text-left"/>
<Spinner align="text-center" />
<Spinner align="text-right"/>
</div>

```html
<Spinner align="text-left"/>
<Spinner align="text-center" />
<Spinner align="text-right"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>