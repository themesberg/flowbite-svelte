---
layout: alertLayout
---

<script>
  import Htwo from '../utils/Htwo.svelte'
  import { Alert, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import { flip } from 'svelte/animate';
  import componentProps from '../props/Alert.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let alerts = [
		{
			id: 'alert1',
			btnColor: 'blue',
			text: 'Alert 1'
		},
		{
			id: 'alert2',
			btnColor: 'green',
			text: 'Alert 2'
		},
		{
			id: 3,
			btnColor: 'purple',
			text: 'Alert 3'
		}
	];
	function remove(alert) {
		alerts = alerts.filter((t) => t !== alert);
	}
let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Alerts',
      href:'/alerts'
    },
    {
      label:'Alerts animation',
      href:'/alerts/animation'
    }
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Alert animation</h1>

<Htwo label="Examples" />

<p class="text-gray-900 dark:text-white py-4 text-lg">You can use Svelte animation by adding a custom event handler using the handlebtn1 prop.</p>

<div class="rounded-xl w-full my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6 h-64">
 
{#each alerts as item (item.id)}
	<div animate:flip="{{ delay: 500 }}">
		<Alert alertId={item.id} color={item.btnColor} btn1 on:handlebtn1={() => remove(item)}>
			{item.text}
		</Alert>
	</div>
{/each}
</div>

```html
<script>
import { Alert }from 'flowbite-svelte';
import { flip } from 'svelte/animate';

let alerts = [
  {
    id: 'alert1',
    btnColor: 'blue',
    text: 'Alert 1'
  },
  {
    id: 'alert2',
    btnColor: 'green',
    text: 'Alert 2'
  },
  {
    id: 3,
    btnColor: 'purple',
    text: 'Alert 3'
  }
];
function remove(alert) {
  alerts = alerts.filter((t) => t !== alert);
}
</script>

{#each alerts as item (item.id)}
	<div animate:flip="{{ delay: 500 }}">
		<Alert alertId={item.id} color={item.btnColor} btn1 on:handlebtn1={() => remove(item)}>
			{item.text}
		</Alert>
	</div>
{/each}
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>