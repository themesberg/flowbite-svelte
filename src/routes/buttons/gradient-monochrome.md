---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { GradientMonochromeButton , Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/GradientMonochromeButton.json'
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
      label:'Gradient monochrome button',
      href:'/buttons/gradient-monochrome'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Gradient Monochrome Buttons</h1>

<Htwo label="text-sm" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink">purple</GradientMonochromeButton>
</div>

```html
<GradientMonochromeButton color="blue">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink">purple</GradientMonochromeButton>
```

<Htwo label="text-xs" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue" textSize="text-xs">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green" textSize="text-xs">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan" textSize="text-xs">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal" textSize="text-xs">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime" textSize="text-xs">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red" textSize="text-xs">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-xs">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-xs">purple</GradientMonochromeButton>

</div>

```html
<GradientMonochromeButton color="blue" textSize="text-xs">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green" textSize="text-xs">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan" textSize="text-xs">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal" textSize="text-xs">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime" textSize="text-xs">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red" textSize="text-xs">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-xs">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-xs">purple</GradientMonochromeButton>
```

<Htwo label="text-base" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue" textSize="text-base">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green" textSize="text-base">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan" textSize="text-base">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal" textSize="text-base">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime" textSize="text-base">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red" textSize="text-base">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-base">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-base">purple</GradientMonochromeButton>
</div>

```html
<GradientMonochromeButton color="blue" textSize="text-base">blue</GradientMonochromeButton>
<GradientMonochromeButton color="green" textSize="text-base">green</GradientMonochromeButton>
<GradientMonochromeButton color="cyan" textSize="text-base">cyan</GradientMonochromeButton>
<GradientMonochromeButton color="teal" textSize="text-base">teal</GradientMonochromeButton>
<GradientMonochromeButton color="lime" textSize="text-base">lime</GradientMonochromeButton>
<GradientMonochromeButton color="red" textSize="text-base">red</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-base">pink</GradientMonochromeButton>
<GradientMonochromeButton color="pink" textSize="text-base">purple</GradientMonochromeButton>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>