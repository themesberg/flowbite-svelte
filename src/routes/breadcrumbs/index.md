---
layout: breadcrumbLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
  import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
  import { Breadcrumb, BreadcrumbItem } from '$lib/index'
  import { Home } from 'svelte-heros'
  import componentProps from '../props/Breadcrumb.json'
  import componentProps2 from '../props/BreadcrumbItem.json'
  let items = componentProps.props
  let items2 = componentProps2.props
  let propHeader = ['Name', 'Type', 'Default']
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem>Breadcrumb</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Breadcrumb</h1>

<Htwo label="Default Breadcrumb" />

<ExampleDiv>
<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</ExampleDiv>

```html
<Breadcrumb aria-label="Default breadcrumb example">
  <BreadcrumbItem href="#" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

<Htwo label="Solid Breadcrumb" />

<ExampleDiv>
<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="#" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
</ExampleDiv>

```html
<Breadcrumb aria-label="Solid background breadcrumb example" class="bg-gray-50 py-3 px-5 dark:bg-gray-900">
  <BreadcrumbItem href="#" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="#">Projects</BreadcrumbItem>
  <BreadcrumbItem>Flowbite Svelte</BreadcrumbItem>
</Breadcrumb>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3>Breadcrumb</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>

<h3>BreadcrumbItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>