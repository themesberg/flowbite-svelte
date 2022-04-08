---
layout: tooltipLayout
---

<script>
import {Tooltip, Button, Table, TableDefaultRow} from '$lib/index'
let header = ['Name', 'Type','Default']
import item from './default.json'
let items = item.props
// let items =[
//   ['tip', 'string','-'],
//   ['top','boolean','false'],
//   ['bottom','boolean','false'],
//   ['left','boolean','false'],
//   ['active','boolean','false']
// ]
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Default Tooltip</h1>

<h2 class="text-2xl w-full dark:text-white py-8">Tooltip top</h2>

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


<h2 class="text-2xl w-full dark:text-white py-8">Tooltip bottom</h2>

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

<h2 class="text-2xl w-full dark:text-white py-8">Tooltip right</h2>

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

<h2 class="text-2xl w-full dark:text-white py-8">Tooltip left</h2>

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

<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

<Table {header}  {divClass}  >
  <TableDefaultRow {items} rowState='striped' />
</Table>
