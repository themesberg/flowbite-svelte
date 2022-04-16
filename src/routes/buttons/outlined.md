---
layout: buttonLayout
---

<script>
  import { Button , Table, TableDefaultRow, Breadcrumb }from '$lib/index';
  import componentProps from '../props/Button.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Outlined Buttons</h1>

```js
import { Button } from "flowbite-svelte";
```

<h2 class="text-2xl w-full dark:text-white py-8">Size xs</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
  <Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" btnColor="blue-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="dark-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="green-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="red-outline" />
<Button name="Button text-xs" textSize="text-xs" btnColor="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size sm</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" btnColor="blue-outline" />
  <Button name="Button" btnColor="dark-outline" />
  <Button name="Button" btnColor="green-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="red-outline" />
  <Button name="Button" btnColor="purple-outline" />
</div>

```html
<Button name="Button" btnColor="blue-outline" />
<Button name="Button" btnColor="dark-outline" />
<Button name="Button" btnColor="green-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="red-outline" />
<Button name="Button" btnColor="purple-outline" />
```


<h2 class="text-2xl w-full dark:text-white py-8">Size base</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
</div>

```html
<Button name="Button" textSize="text-base" btnColor="blue-outline" />
<Button name="Button" textSize="text-base" btnColor="dark-outline" />
<Button name="Button" textSize="text-base" btnColor="green-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="red-outline" />
<Button name="Button" textSize="text-base" btnColor="purple-outline" />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>