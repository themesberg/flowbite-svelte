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
  <Button textSize="text-xs">Button text-xs</Button>
  <Button textSize="text-sm">Button text-sm</Button>
  <Button textSize="text-base">Button text-base</Button>
  <Button textSize="text-lg">Button text-lg</Button>
  <Button textSize="text-xl">Button text-xl</Button>
  <Button textSize="text-2xl">Button text-2xl</Button>
  <Button textSize="text-3xl">Button text-3xl</Button>
  <Button textSize="text-4xl">Button text-4xl</Button>
</div>

```html
<Button textSize="text-xs">Button text-xs</Button>
<Button textSize="text-sm">Button text-sm</Button>
<Button textSize="text-base">Button text-base</Button>
<Button textSize="text-lg">Button text-lg</Button>
<Button textSize="text-xl">Button text-xl</Button>
<Button textSize="text-2xl">Button text-2xl</Button>
<Button textSize="text-3xl">Button text-3xl</Button>
<Button textSize="text-4xl">Button text-4xl</Button>
```

<Htwo label="Colors" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Button textSize="text-sm">Button</Button>
  <Button textSize="text-sm" btnColor="dark">Button</Button>
  <Button textSize="text-sm" btnColor="light">Button</Button>
  <Button textSize="text-sm" btnColor="red">Button</Button>
  <Button textSize="text-sm" btnColor="green">Button</Button>
  <Button textSize="text-sm" btnColor="yellow">Button</Button>
  <Button textSize="text-sm" btnColor="purple">Button</Button>
</div>

```html
<Button textSize="text-sm">Button</Button>
<Button textSize="text-sm" btnColor="dark">Button</Button>
<Button textSize="text-sm" btnColor="light">Button</Button>
<Button textSize="text-sm" btnColor="red">Button</Button>
<Button textSize="text-sm" btnColor="green">Button</Button>
<Button textSize="text-sm" btnColor="yellow">Button</Button>
<Button textSize="text-sm" btnColor="purple">Button</Button>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
