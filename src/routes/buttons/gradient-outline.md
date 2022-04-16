---
layout: buttonLayout
---

<script>
  import { GradientOutlineButton , Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/GradientOutlineButton.json'
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

<h2 class="text-2xl w-full dark:text-white py-4">text-sm</h2>

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

<h2 class="text-2xl w-full dark:text-white py-4">text-xs</h2>


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

<h2 class="text-2xl w-full dark:text-white py-4">text-base</h2>

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

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>