---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { GradientOutlineButton , Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/GradientOutlineButton.json'
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
      label:'Buttons',
      href:'/buttons/'
    },
    {
      label:'Gradient outline button',
      href:'/buttons/gradient-outline'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Gradient Outline Buttons</h1>

<Htwo label="text-sm" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue"/>
<GradientOutlineButton color="green2blue" name="green2blue"/>
<GradientOutlineButton color="purple2pink" name="purple2pink"/>
<GradientOutlineButton color="pink2orange" name="pink2orange"/>
<GradientOutlineButton color="teal2lime" name="teal2lime"/>
<GradientOutlineButton color="red2yellow" name="red2yellow"/>
</div>

```html
<GradientOutlineButton color="purple2blue" name="purple2blue"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue"/>
<GradientOutlineButton color="green2blue" name="green2blue"/>
<GradientOutlineButton color="purple2pink" name="purple2pink"/>
<GradientOutlineButton color="pink2orange" name="pink2orange"/>
<GradientOutlineButton color="teal2lime" name="teal2lime"/>
<GradientOutlineButton color="red2yellow" name="red2yellow"/>
```

<Htwo label="text-xs" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
</div>

```html
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
```

<Htwo label="text-base" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-base"/>
</div>

```html
<GradientOutlineButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientOutlineButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientOutlineButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientOutlineButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientOutlineButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientOutlineButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientOutlineButton color="red2yellow" name="red2yellow" textSize="text-base"/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>