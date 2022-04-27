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
      label:'Button default',
      href:'/buttons/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Buttons</h1>

<Htwo label="Sizes" />

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

<Htwo label="Colors" />

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

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>