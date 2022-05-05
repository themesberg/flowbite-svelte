---
layout: spinnerLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
    import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Button, Spinner, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps from '../props/Button.json'
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
      label:'Loader button',
      href:'/buttons/button-loader'
    },
  ]
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Button Loader</h1>

```html
<script>
	import { Button, Spinner } from 'flowbite-svelte';
</script>
```

<Htwo label="Loaders" />

<ExampleDiv>
<Button textSize="text-sm" btnColor="light" ><Spinner size="4" currentFill="#E5E7EB" currentColor="#1C64F2" />Loading ...</Button>
<Button textSize="text-sm"><Spinner size="4" currentFill="#E5E7EB" currentColor="#fff" />Loading ...</Button>
</ExampleDiv>

```html
<Button textSize="text-sm" btnColor="light"><Spinner size="4" currentFill="#E5E7EB" currentColor="#1C64F2" />Loading ...</Button>
<Button textSize="text-sm"><Spinner size="4" currentFill="#E5E7EB" currentColor="#fff" />Loading ...</Button>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
