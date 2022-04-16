---
layout: buttonLayout
---

<script>
  import { ColorShadowButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/ColorShadowButton.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Colored Shadow Buttons</h1>

<h2 class="text-2xl w-full dark:text-white py-8">text-sm</h2>


<div class=" flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ColorShadowButton color="blue" name="Blue" />
<ColorShadowButton color="green" name="Green" />
<ColorShadowButton color="cyan" name="Cyan" />
<ColorShadowButton color="teal" name="Teal" />
<ColorShadowButton color="lime" name="Lime" />
<ColorShadowButton color="red" name="Red" />
<ColorShadowButton color="pink" name="Pink" />
<ColorShadowButton color="purple" name="Purple" />
</div>

```html
<ColorShadowButton color="blue" name="Blue" />
<ColorShadowButton color="green" name="Green" />
<ColorShadowButton color="cyan" name="Cyan" />
<ColorShadowButton color="teal" name="Teal" />
<ColorShadowButton color="lime" name="Lime" />
<ColorShadowButton color="red" name="Red" />
<ColorShadowButton color="pink" name="Pink" />
<ColorShadowButton color="purple" name="Purple" />
```

<h2 class="text-2xl w-full dark:text-white py-8">text-xs</h2>


<div class=" flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ColorShadowButton color="blue" name="Blue" textSize="text-xs"/>
<ColorShadowButton color="green" name="Green" textSize="text-xs" />
<ColorShadowButton color="cyan" name="Cyan" textSize="text-xs" />
<ColorShadowButton color="teal" name="Teal" textSize="text-xs" />
<ColorShadowButton color="lime" name="Lime" textSize="text-xs" />
<ColorShadowButton color="red" name="Red" textSize="text-xs" />
<ColorShadowButton color="pink" name="Pink" textSize="text-xs" />
<ColorShadowButton color="purple" name="Purple" textSize="text-xs" />
</div>

```html
<ColorShadowButton color="blue" name="Blue" textSize="text-xs"/>
<ColorShadowButton color="green" name="Green" textSize="text-xs" />
<ColorShadowButton color="cyan" name="Cyan" textSize="text-xs" />
<ColorShadowButton color="teal" name="Teal" textSize="text-xs" />
<ColorShadowButton color="lime" name="Lime" textSize="text-xs" />
<ColorShadowButton color="red" name="Red" textSize="text-xs" />
<ColorShadowButton color="pink" name="Pink" textSize="text-xs" />
<ColorShadowButton color="purple" name="Purple" textSize="text-xs" />
```

<h2 class="text-2xl w-full dark:text-white py-8">text-base</h2>

<div class=" flex flex-wrap justify-center rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<ColorShadowButton color="blue" name="Blue" textSize="text-base"/>
<ColorShadowButton color="green" name="Green" textSize="text-base" />
<ColorShadowButton color="cyan" name="Cyan" textSize="text-base" />
<ColorShadowButton color="teal" name="Teal" textSize="text-base" />
<ColorShadowButton color="lime" name="Lime" textSize="text-base" />
<ColorShadowButton color="red" name="Red" textSize="text-base" />
<ColorShadowButton color="pink" name="Pink" textSize="text-base" />
<ColorShadowButton color="purple" name="Purple" textSize="text-base" />
</div>

```html
<ColorShadowButton color="blue" name="Blue" textSize="text-base"/>
<ColorShadowButton color="green" name="Green" textSize="text-base" />
<ColorShadowButton color="cyan" name="Cyan" textSize="text-base" />
<ColorShadowButton color="teal" name="Teal" textSize="text-base" />
<ColorShadowButton color="lime" name="Lime" textSize="text-base" />
<ColorShadowButton color="red" name="Red" textSize="text-base" />
<ColorShadowButton color="pink" name="Pink" textSize="text-base" />
<ColorShadowButton color="purple" name="Purple" textSize="text-base" />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>