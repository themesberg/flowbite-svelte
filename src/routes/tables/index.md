---
layout: tableLayout
---

<script>
import { Table, TableDefaultRow, TableSearch, Breadcrumb } from '$lib/index'
import componentProps1 from '../props/Table.json'
import componentProps2 from '../props/TableDefaultRow.json'
import componentProps3 from '../props/TableSearch.json'
let items1 = componentProps1.props
let items2 = componentProps2.props
let items3 = componentProps3.props
let propHeader = ['Name', 'Type', 'Default']

let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let itemEx = [
  ['Apple MacBook Pro 17"','Sliver','Laptop','$2999','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>'],
  ['Microsoft Surface Pro','White','Laptop PC','$1999','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>'],
  ['Magic Mouse 2','Black','Accessories','$99','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>']
]
let headerEx = [' Product name','Color','Category','Price','Edit']

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tables',
      href:'/tables/'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Table Components</h1>

<h2 class="text-2xl mt-8 dark:text-white py-4">Examples</h2>

<p>Add `html` to render HTML elements in a table.</p>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} html />
</Table>
</div>

```html
<script>
import { Table, TableDefaultRow } from 'flowbite-svelte'
let itemEx = [
  ['Apple MacBook Pro 17"','Sliver','Laptop','$2999','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>'],
  ['Microsoft Surface Pro','White','Laptop PC','$1999','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>'],
  ['Magic Mouse 2','Black','Accessories','$99','<a href="/" class="text-blue-600 hover:underline dark:text-blue-500">Edit</a>']
]
let headerEx = [' Product name','Color','Category','Price','Edit']
</script>

<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} html />
</Table>
```

<h2 id="Striped_rows" class="text-2xl w-full dark:text-white py-8">Striped rows</h2>

<p>Set `rowState` to striped to alternate background colors of every second tabel row.</p>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} rowState="striped" html />
</Table>
</div>

```html
<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} rowState="striped" html />
</Table>
```

<h2 id="Hover" class="text-2xl w-full dark:text-white py-8">Hover</h2>

<p>Set `rowState` to hover to change the background color of a data row when hovering over the element with the cursor.</p>

<div class="container justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} rowState="hover" html />
</Table>
</div>

```html
<Table header={headerEx} {divClass} >
  <TableDefaultRow items={itemEx} rowState="hover" html />
</Table>
```

<h2 id="Table_search" class="text-2xl w-full dark:text-white py-8">Table search</h2>

<TableSearch menuItems={itemEx} header={headerEx} placeholder="Search by product name"/>

```html
<TableSearch menuItems={itemEx} header={headerEx} placeholder="Search by product name"/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>Table</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>TableDefaultRow</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>

<h3>TableSearch</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items3} rowState='hover' />
</Table>