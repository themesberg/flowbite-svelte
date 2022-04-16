---
layout: badgeLayout
---

<script>
  import { Badge, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/Badge.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Badges',
      href:'/badges/'
    },
    {
      label:'Badge default',
      href:'/badges/default'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Badges</h1>

```html
<script>
  import {Badge} from 'flowbite-svelte'
</script>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Size xs</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
</div>


```html
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Size sm</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 ">
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
</div>

```html
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Size base</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
</div>

```html
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>