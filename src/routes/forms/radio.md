---
layout: formLayout
---

<script>
import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
import { onMount } from 'svelte';
import { Radio, Table, TableDefaultRow, Breadcrumb } from '$lib/index'
import componentProps from '../props/Radio.json'
let items = componentProps.props

let propHeader = ['Name', 'Type', 'Default']
let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

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

let radiooptions2 = [
  {
    id: 'country-option-1',
    value: 'USA',
    checked: true,
    label: 'Radio button with a <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link inside</a>.'
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

<Htwo label="Examples" />

<ExampleDiv>
<Radio options={radiooptions} name={radioname}/>
</ExampleDiv>

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

<Htwo label="Radio label with a link" />

<ExampleDiv>
<Radio options={radiooptions2} name="label-link"/>
</ExampleDiv>

```html
<script>
let radiooptions2 = [
  {
    id: 'country-option-1',
    value: 'USA',
    checked: true,
    label: 'Radio button with a <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">link inside</a>.'
  }
];
</script>  
<Radio options={radiooptions2} name="label-link"/>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>
