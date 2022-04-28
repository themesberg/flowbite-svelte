---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { GradientDuotoneButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/GradientDuotoneButton.json'
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
      label:'Gradient duotone button',
      href:'/buttons/gradient-duotone'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Gradient Duotone Buttons</h1>

<Htwo label="text-sm" />

<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" textSize="text-sm">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-sm">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-sm">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-sm">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-sm">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-sm">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-sm">red2yellow</GradientDuotoneButton>
</div>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-sm">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-sm">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-sm">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-sm">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-sm">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-sm">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-sm">red2yellow</GradientDuotoneButton>
```

<Htwo label="text-xs" />

<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" textSize="text-xs">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-xs">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-xs">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-xs">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-xs">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-xs">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-xs">red2yellow</GradientDuotoneButton>
</div>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-xs">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-xs">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-xs">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-xs">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-xs">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-xs">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-xs">red2yellow</GradientDuotoneButton>
```

<Htwo label="text-base" />

<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" textSize="text-base">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-base">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-base">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-base">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-base">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-base">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-base">red2yellow</GradientDuotoneButton>
</div>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-base">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-base">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-base">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-base">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-base">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-base">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-base">red2yellow</GradientDuotoneButton>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>