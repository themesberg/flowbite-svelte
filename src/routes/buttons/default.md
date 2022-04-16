---
layout: buttonLayout
---

<script>
  import {ArrowCircleRightIconOutline} from '@codewithshin/svelte-heroicons'
  import { Button, Table, TableDefaultRow, Breadcrumb }from '$lib/index';
  import componentProps from '../props/Button.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
  
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Buttons</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Sizes</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" />
  <Button name="Button text-sm" textSize="text-sm" />
  <Button name="Button text-base" textSize="text-base" />
  <Button name="Button text-lg" textSize="text-lg" />
  <Button name="Button text-xl" textSize="text-xl" />
  <Button name="Button text-2xl" textSize="text-2xl" />
  <Button name="Button text-3xl" textSize="text-3xl" />
  <Button name="Button text-4xl" textSize="text-4xl" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" />
<Button name="Button text-sm" textSize="text-sm" />
<Button name="Button text-base" textSize="text-base" />
<Button name="Button text-lg" textSize="text-lg" />
<Button name="Button text-xl" textSize="text-xl" />
<Button name="Button text-2xl" textSize="text-2xl" />
<Button name="Button text-3xl" textSize="text-3xl" />
<Button name="Button text-4xl" textSize="text-4xl" />
```

<h2 class="text-2xl w-full dark:text-white py-8">Colors</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" />
  <Button name="Button" textSize="text-sm" btnColor="dark" />
  <Button name="Button" textSize="text-sm" btnColor="light" />
  <Button name="Button" textSize="text-sm" btnColor="red" />
  <Button name="Button" textSize="text-sm" btnColor="green" />
  <Button name="Button" textSize="text-sm" btnColor="yellow" />
  <Button name="Button" textSize="text-sm" btnColor="purple" />
</div>

```html
<Button name="Button" textSize="text-sm" />
<Button name="Button" textSize="text-sm" btnColor="dark" />
<Button name="Button" textSize="text-sm" btnColor="light" />
<Button name="Button" textSize="text-sm" btnColor="red" />
<Button name="Button" textSize="text-sm" btnColor="green" />
<Button name="Button" textSize="text-sm" btnColor="yellow" />
<Button name="Button" textSize="text-sm" btnColor="purple" />
```

<h2 class="text-2xl w-full text-gray-900 dark:text-white py-8">Button Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>