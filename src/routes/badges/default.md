---
layout: badgeLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Badge, Breadcrumb } from "$lib/index"
  import componentProps from '../props/Badge.json'
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
      label:'Badges',
      href:'/badges/'
    },
    {
      label:'Badge default',
      href:'/badges/default'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Badges</h1>

```html
<script>
  import {Badge} from 'flowbite-svelte'
</script>
```

<Htwo label="Size xs" />

<ExampleDiv class="flex justify-between">
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
</ExampleDiv>


```html
<Badge name="Default"/>
<Badge name="Gray" color="gray"/>
<Badge name="Red" color="red"/>
<Badge name="Green" color="green"/>
<Badge name="Yellow" color="yellow"/>
<Badge name="Indigo" color="indigo"/>
<Badge name="Purple" color="purple"/>
<Badge name="Pink" color="pink"/>
```

<Htwo label="Size sm" />

<ExampleDiv class="flex justify-between">
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
</ExampleDiv>

```html
<Badge name="Default" textSize="text-sm"/>
<Badge name="Gray" color="gray" textSize="text-sm"/>
<Badge name="Red" color="red" textSize="text-sm"/>
<Badge name="Green" color="green" textSize="text-sm"/>
<Badge name="Yellow" color="yellow" textSize="text-sm"/>
<Badge name="Indigo" color="indigo" textSize="text-sm"/>
<Badge name="Purple" color="purple" textSize="text-sm"/>
<Badge name="Pink" color="pink" textSize="text-sm"/>
```

<Htwo label="Size base" />

<ExampleDiv class="flex justify-between">
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
</ExampleDiv>

```html
<Badge name="Default" textSize="text-base"/>
<Badge name="Gray" color="gray" textSize="text-base"/>
<Badge name="Red" color="red" textSize="text-base"/>
<Badge name="Green" color="green" textSize="text-base"/>
<Badge name="Yellow" color="yellow" textSize="text-base"/>
<Badge name="Indigo" color="indigo" textSize="text-base"/>
<Badge name="Purple" color="purple" textSize="text-base"/>
<Badge name="Pink" color="pink" textSize="text-base"/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>