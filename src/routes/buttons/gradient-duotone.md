---
layout: buttonLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
    import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { GradientDuotoneButton, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/GradientDuotoneButton.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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
      label:'Gradient duotone button',
      href:'/buttons/gradient-duotone'
    },
  ]
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Gradient Duotone Buttons</h1>

<Htwo label="text-sm" />

<ExampleDiv>
<GradientDuotoneButton color="purple2blue" textSize="text-sm">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-sm">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-sm">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-sm">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-sm">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-sm">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-sm">red2yellow</GradientDuotoneButton>
</ExampleDiv>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-sm">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-sm">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-sm">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-sm">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-sm">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-sm">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-sm">red2yellow</GradientDuotoneButton>
```

<Htwo label="text-xs" />

<ExampleDiv>
<GradientDuotoneButton color="purple2blue" textSize="text-xs">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-xs">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-xs">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-xs">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-xs">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-xs">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-xs">red2yellow</GradientDuotoneButton>
</ExampleDiv>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-xs">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-xs">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-xs">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-xs">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-xs">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-xs">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-xs">red2yellow</GradientDuotoneButton>
```

<Htwo label="text-base" />

<ExampleDiv>
<GradientDuotoneButton color="purple2blue" textSize="text-base">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-base">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-base">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-base">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-base">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-base">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-base">red2yellow</GradientDuotoneButton>
</ExampleDiv>

```html
<GradientDuotoneButton color="purple2blue" textSize="text-base">purple2blue</GradientDuotoneButton>
<GradientDuotoneButton color="cyan2blue" textSize="text-base">cyan2blue</GradientDuotoneButton>
<GradientDuotoneButton color="green2blue" textSize="text-base">green2blue</GradientDuotoneButton>
<GradientDuotoneButton color="purple2pink" textSize="text-base">purple2pink</GradientDuotoneButton>
<GradientDuotoneButton color="pink2orange" textSize="text-base">pink2orange</GradientDuotoneButton>
<GradientDuotoneButton color="teal2lime" textSize="text-base">teal2lime</GradientDuotoneButton>
<GradientDuotoneButton color="red2yellow" textSize="text-base">red2yellow</GradientDuotoneButton>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>


<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>