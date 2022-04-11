---
layout: buttonLayout
---

<script>
  import { GradientDuotoneButton, Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/GradientDuotoneButton.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white pt-16">Gradient Duotone Buttons</h1>

<h2 class="text-2xl w-full dark:text-white py-8">text-sm</h2>

<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-sm"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-sm"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-sm"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-sm"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-sm"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-sm"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-sm"/>
</div>

```html
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-sm"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-sm"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-sm"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-sm"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-sm"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-sm"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-sm"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-xs</h2>


<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
</div>

```html
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-xs"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-xs"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-xs"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-xs"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-xs"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-xs"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-xs"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-base</h2>

<div class="flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-base"/>
</div>

```html
<GradientDuotoneButton color="purple2blue" name="purple2blue" textSize="text-base"/>
<GradientDuotoneButton color="cyan2blue" name="cyan2blue" textSize="text-base"/>
<GradientDuotoneButton color="green2blue" name="green2blue" textSize="text-base"/>
<GradientDuotoneButton color="purple2pink" name="purple2pink" textSize="text-base"/>
<GradientDuotoneButton color="pink2orange" name="pink2orange" textSize="text-base"/>
<GradientDuotoneButton color="teal2lime" name="teal2lime" textSize="text-base"/>
<GradientDuotoneButton color="red2yellow" name="red2yellow" textSize="text-base"/>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>