---
layout: tooltipLayout
---

<script>
import {Tooltip, Button, Table, TableDefaultRow, Breadcrumb} from '$lib/index'
import componentProps from '../props/Tooltip.json'
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
      label:'Tooltips',
      href:'/tooltips/'
    },
    {
      label:'Tooltip default',
      href:'/tooltips/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tooltip</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Tooltip top</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" top>
    <Button />
  </Tooltip>
</div>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" top>
  <Button />
</Tooltip>
```


<h2 class="text-2xl w-full dark:text-white py-4">Tooltip bottom</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" bottom>
    <Button />
  </Tooltip>
</div>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" bottom>
  <Button />
</Tooltip>
```

<h2 class="text-2xl w-full dark:text-white py-4">Tooltip right</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" right>
    <Button />
  </Tooltip>
</div>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" right>
  <Button />
</Tooltip>
```

<h2 class="text-2xl w-full dark:text-white py-4">Tooltip left</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <Tooltip tip="My tooltip content" left>
    <Button />
  </Tooltip>
</div>

```html
<script>
import {Tooltip, Button} from 'flowbite-svelte'
</script>

<Tooltip tip="My tooltip content" left>
  <Button />
</Tooltip>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>