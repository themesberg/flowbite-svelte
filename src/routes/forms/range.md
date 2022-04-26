---
layout: formLayout
---

<script>
  import { Range, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Range.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
  let minmaxValue=5
  let stepValue=2.5

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Range Components</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range1" label="Default range" />

</div>

```html
<script>
  import { Range } from 'flowbite-svelte'
</script>

<Range id="range1" label="Default range"/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Disabled state</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-disabled" label="Disabled state" disabled/>
</div>

```html
<Range id="range-disabled" label="Disabled state" disabled/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Binding the value</h2>

<p>Use bind:value to bind the range input value as seen the the following examples.</p>

<h2 class="text-2xl w-full dark:text-white py-4">Min and max</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
</div>

```html
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
```

<h2 class="text-2xl w-full dark:text-white py-4">Steps</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
</div>

```html
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<h2 class="text-2xl w-full dark:text-white py-4">Sizes</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="small-range" label="Small range" size="small" />
<Range id="default-range" label="Default range"  />
<Range id="large-range" label="Large range" size="large" />
</div>

```html
<Range id="range-disabled" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<h2 class="text-2xl w-full dark:text-white py-4">Unknow attributes</h2>

<p>Since we added `$$restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.</p>

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>

