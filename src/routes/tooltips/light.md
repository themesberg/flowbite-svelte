---
layout: tooltipLayout
---

<script>
import {LightTooltip, Button, Table, TableDefaultRow} from '$lib/index'
let header = ['Name', 'Type','Default']
let items =[
  ['tip', 'string',''],
  ['top','boolean','false'],
  ['bottom','boolean','false'],
  ['left','boolean','false'],
  ['active','boolean','false']
]
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let tableClass='w-full text-lg text-left text-gray-500 dark:text-gray-400'
</script>

<h1 class="text-3xl w-full dark:text-white py-8">LightTooltip</h1>

<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip top</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" top>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" top>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip bottom</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" bottom>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" bottom>
  <Button />
</LightTooltip>
```

<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip right</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" right>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" right>
  <Button />
</LightTooltip>
```


<h2 class="text-2xl w-full dark:text-white py-8">LightTooltip left</h2>

<div class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
  <LightTooltip tip="My tooltip content" left>
    <Button />
  </LightTooltip>
</div>

```html
<script>
import {LightTooltip, Button} from 'flowbite-svelte'
</script>

<LightTooltip tip="My tooltip content" left>
  <Button />
</LightTooltip>
```

<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

<Table {header}  {divClass}  >
  <TableDefaultRow {items} rowState='hover' />
</Table>
