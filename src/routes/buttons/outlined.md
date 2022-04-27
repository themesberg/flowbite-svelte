---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Button , Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Button.json'
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
      label:'Outline button',
      href:'/buttons/outlined'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Outlined Buttons</h1>

```js
import { Button } from "flowbite-svelte";
```

<Htwo label="Size xs" />

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

<Htwo label="Size sm" />

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

<Htwo label="Size base" />

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>