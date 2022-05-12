---
layout: formLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
    import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Range, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
  import componentProps from '../props/Range.json'
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']

 let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
  let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
  let minmaxValue=5
  let stepValue=2.5

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Forms',
      href:'/forms/'
    },
    {
      label:'Range',
      href:'/forms/range'
    }
  ]
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Range Components</h1>

<Htwo label="Examples" />

<ExampleDiv>
<Range id="range1" label="Default range" />

</ExampleDiv>

```html
<script>
  import { Range } from 'flowbite-svelte'
</script>

<Range id="range1" label="Default range"/>
```

<Htwo label="Disabled state" />

<ExampleDiv>
<Range id="range-disabled" label="Disabled state" disabled/>
</ExampleDiv>

```html
<Range id="range-disabled" label="Disabled state" disabled/>
```

<Htwo label="Binding value" />

<p>Use bind:value to bind the range input value as seen the the following examples.</p>

<Htwo label="Min and max" />

<ExampleDiv>
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
</ExampleDiv>

```html
<Range id="range-minmax" label="Min-max range" min="0" max="10" bind:value={minmaxValue}/>
<p>Value: {minmaxValue}</p>
```

<Htwo label="Steps" />

<ExampleDiv>
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
</ExampleDiv>

```html
<Range id="range-steps" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<Htwo label="Sizes" />

<ExampleDiv>
<Range id="small-range" label="Small range" size="small" />
<Range id="default-range" label="Default range"  />
<Range id="large-range" label="Large range" size="large" />
</ExampleDiv>

```html
<Range id="range-disabled" label="Range steps" min="0" max="5" bind:value={stepValue} step="0.5"/>
<p>Value: {stepValue}</p>
```

<Htwo label="Unknown attributes" />

<p>Since we added `$$restProps` to input field, you can contain the props which are not declared with export. It will pass down other unknown attributes to an element in a component.</p>

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>

