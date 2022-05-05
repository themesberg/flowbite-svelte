---
layout: breadcrumbLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
    import ExampleDiv from '../utils/ExampleDiv.svelte'
  import { Breadcrumb, Table, TableDefaultRow } from '$lib/index'
  import componentProps from '../props/Breadcrumb.json'
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
      label:'Breadcrumb',
      href:'breadcrumbs/index'
    }
  ]
	import Responsive from '../utils/Responsive.svelte';
</script>

<Responsive />

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Breadcrumb</h1>

<Htwo label="Default Breadcrumb" />

<ExampleDiv>
<Breadcrumb {crumbs} />
</ExampleDiv>

```html
<script>
  import { Breadcrumb } from '$lib/index'
  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Breadcrumb',
      href:'breadcrumbs/index'
    }
  ]
</script>

<Breadcrumb {crumbs} />
```

<Htwo label="Solid Breadcrumb" />

<ExampleDiv>
<Breadcrumb {crumbs} solid/>
</ExampleDiv>

```html
<Breadcrumb {crumbs} solid/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>