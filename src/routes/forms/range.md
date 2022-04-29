---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Range, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Range.json'
let items = componentProps.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let minmaxValue=5
  let stepValue=2.5

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Range Components</h1>

<Htwo label="Examples" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range1" label="Default range" />

</div>

```html
<script>
  import { Range } from 'flowbite-svelte'
</script>

<Range id="range1" label="Default range"/>
```

<Htwo label="Disabled state" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-disabled" label="Disabled state" disabled/>
</div>

```html
<Range id="range-disabled" label="Disabled state" disabled/>
```

<Htwo label="Binding value" />

<p>Use bind:value to bind the range input value as seen the the following examples.</p>

<Htwo label="Min and max" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
</div>

```html
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
```

<Htwo label="Steps" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
</div>

```html
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<Htwo label="Sizes" />

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Range id="small-range" label="Small range" size="small" />
<Range id="default-range" label="Default range"  />
<Range id="large-range" label="Large range" size="large" />
</div>

```html
<Range id="range-disabled" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<Htwo label="Unknown attributes" />

<p>Since we added `$$restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.</p>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

