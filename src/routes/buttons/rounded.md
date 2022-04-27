---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Button, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
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
      label:'Round button',
      href:'/buttons/rounded'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Rounded Buttons</h1>

<Htwo label="Size xs" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button text-xs" textSize="text-xs" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
  <Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button text-xs" textSize="text-xs" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="dark" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="light" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="green" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="red" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="yellow" rounded="true" />
<Button name="Button text-xs" textSize="text-xs" buttonType="purple" rounded="true" />
```

<Htwo label="Size sm" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-sm" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button" textSize="text-sm" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-sm" buttonType="purple" rounded="true" />
```

<Htwo label="Size base" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button name="Button" textSize="text-base" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
  <Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
</div>

```html
<Button name="Button" textSize="text-base" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="dark" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="light" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="green" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="red" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="yellow" rounded="true" />
<Button name="Button" textSize="text-base" buttonType="purple" rounded="true" />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>