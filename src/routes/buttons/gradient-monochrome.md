---
layout: buttonLayout
---

<script>
  import { GradientMonochromeButton , Table, TableDefaultRow }from '$lib/index';
  import componentProps from '../props/GradientMonochromeButton.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>


<h1 class="text-3xl w-full text-gray-900 dark:text-white py-8">Gradient Monochrome Buttons</h1>

<h2 class="text-2xl w-full dark:text-white  py-8">text-sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue" name="blue"/>
<GradientMonochromeButton color="green" name="green"/>
<GradientMonochromeButton color="cyan" name="cyan"/>
<GradientMonochromeButton color="teal" name="teal"/>
<GradientMonochromeButton color="lime" name="lime"/>
<GradientMonochromeButton color="red" name="red"/>
<GradientMonochromeButton color="pink" name="pink"/>
<GradientMonochromeButton color="pink" name="purple"/>
</div>

```html
<GradientMonochromeButton color="blue" name="blue"/>
<GradientMonochromeButton color="green" name="green"/>
<GradientMonochromeButton color="cyan" name="cyan"/>
<GradientMonochromeButton color="teal" name="teal"/>
<GradientMonochromeButton color="lime" name="lime"/>
<GradientMonochromeButton color="red" name="red"/>
<GradientMonochromeButton color="pink" name="pink"/>
<GradientMonochromeButton color="pink" name="purple"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-xs</h2>


<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue" name="blue" textSize="text-xs"/>
<GradientMonochromeButton color="green" name="green" textSize="text-xs"/>
<GradientMonochromeButton color="cyan" name="cyan" textSize="text-xs"/>
<GradientMonochromeButton color="teal" name="teal" textSize="text-xs"/>
<GradientMonochromeButton color="lime" name="lime" textSize="text-xs"/>
<GradientMonochromeButton color="red" name="red" textSize="text-xs"/>
<GradientMonochromeButton color="pink" name="pink" textSize="text-xs"/>
<GradientMonochromeButton color="pink" name="purple" textSize="text-xs"/>
</div>

```html
<GradientMonochromeButton color="blue" name="blue" textSize="text-xs"/>
<GradientMonochromeButton color="green" name="green" textSize="text-xs"/>
<GradientMonochromeButton color="cyan" name="cyan" textSize="text-xs"/>
<GradientMonochromeButton color="teal" name="teal" textSize="text-xs"/>
<GradientMonochromeButton color="lime" name="lime" textSize="text-xs"/>
<GradientMonochromeButton color="red" name="red" textSize="text-xs"/>
<GradientMonochromeButton color="pink" name="pink" textSize="text-xs"/>
<GradientMonochromeButton color="pink" name="purple" textSize="text-xs"/>
```

<h2 class="text-2xl w-full dark:text-white py-8">text-base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<GradientMonochromeButton color="blue" name="blue" textSize="text-base"/>
<GradientMonochromeButton color="green" name="green" textSize="text-base"/>
<GradientMonochromeButton color="cyan" name="cyan" textSize="text-base"/>
<GradientMonochromeButton color="teal" name="teal" textSize="text-base"/>
<GradientMonochromeButton color="lime" name="lime" textSize="text-base"/>
<GradientMonochromeButton color="red" name="red" textSize="text-base"/>
<GradientMonochromeButton color="pink" name="pink" textSize="text-base"/>
<GradientMonochromeButton color="pink" name="purple" textSize="text-base"/>
</div>

```html
<GradientMonochromeButton color="blue" name="blue" textSize="text-base"/>
<GradientMonochromeButton color="green" name="green" textSize="text-base"/>
<GradientMonochromeButton color="cyan" name="cyan" textSize="text-base"/>
<GradientMonochromeButton color="teal" name="teal" textSize="text-base"/>
<GradientMonochromeButton color="lime" name="lime" textSize="text-base"/>
<GradientMonochromeButton color="red" name="red" textSize="text-base"/>
<GradientMonochromeButton color="pink" name="pink" textSize="text-base"/>
<GradientMonochromeButton color="pink" name="purple" textSize="text-base"/>
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>