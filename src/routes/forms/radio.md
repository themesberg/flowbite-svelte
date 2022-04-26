---
layout: formLayout
---

<script>
import { onMount } from 'svelte';
import { Radio, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Radio.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

let radiooptions = [
  {
    id: 'country-option-1',
    value: 'USA',
    checked: true,
    label: 'United States'
  },
  {
    id: 'country-option-2',
    label: 'Germany',
    value: 'Germany'
  },
  {
    id: 'country-option-3',
    label: 'Spain (disabled)',
    value: 'Spain',
    disabled: true
  }
];

let radioname='countries'


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
      label:'Radio',
      href:'/forms/radio'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Radio Components</h1>

<h2 class="text-2xl w-full dark:text-white py-4">Examples</h2>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6">
<Radio options={radiooptions} name={radioname}/>
</div>

```html
<script>
let radiooptions = [
		{
			id: 'country-option-1',
			value: 'USA',
			checked: true,
			label: 'United States'
		},
		{
			id: 'country-option-2',
			label: 'Germany',
			value: 'Germany'
		},
		{
			id: 'country-option-3',
			label: 'Spain (disabled)',
			value: 'Spain',
			disabled: true
		}
	];
let radioname='countries'
</script>

<Radio options={radiooptions} name={radioname}/>
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>
