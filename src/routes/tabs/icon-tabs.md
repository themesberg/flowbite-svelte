---
layout: tabLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { IconTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import {
		UserCircleOutline,
		ViewGridOutline,
		AdjustmentsOutline,
		ClipboardListOutline
	} from 'svelte-heros';
	import componentProps from '../props/IconTabs.json'
  // Props table
  let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleOutline,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridOutline,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsOutline,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListOutline,
			iconSize: 18,
		}
	];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Tabs',
      href:'/tabs/'
    },
    {
      label:'Icon tabs',
      href:'/tabs/icon-tabs'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Icon Tabs</h1>

<Htwo label="Examples" />

<ExampleDiv>
	<IconTabs {tabs} />
</ExampleDiv>

```html
<script>
	import { IconTabs } from 'flowbite-svelte';
	import {
		UserCircleOutline,
		ViewGridOutline,
		AdjustmentsOutline,
		ClipboardListOutline
	} from 'svelte-heros';

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleOutline,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridOutline,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsOutline,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListOutline,
			iconSize: 18,
		}
	];
</script>

<IconTabs {tabs} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</Table>