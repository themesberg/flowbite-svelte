---
layout: breadcrumbLayout
---

<script>
  import { Breadcrumb, Table, TableDefaultRow } from '$lib/index'
  import componentProps from '../props/Breadcrumb.json'
  let items = componentProps.props
  let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
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

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Breadcrumb</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Default Breadcrumb</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Breadcrumb {crumbs} />
</div>

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

<h2 class="text-2xl w-full dark:text-white py-4">Solid Breadcrumb</h2>

<div
  class="container rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Breadcrumb {crumbs} solid/>
</div>

```html
<Breadcrumb {crumbs} solid/>
```


<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>