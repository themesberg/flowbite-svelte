---
layout: tabLayout
---

<script>
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
	import TableProp from '../utils/TableProp.svelte'
  import TableDefaultRow from '../utils/TableDefaultRow.svelte'
	import { IconTabs, Breadcrumb, BreadcrumbItem } from '$lib/index'
	import {
		Home,
		UserCircle,
		ViewGrid,
		Adjustments,
		ClipboardList
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
			icon: UserCircle,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGrid,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: Adjustments,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardList,
			iconSize: 18,
		}
	];
</script>

<Breadcrumb>
  <BreadcrumbItem href="/" icon={Home} variation="solid">Home</BreadcrumbItem>
  <BreadcrumbItem href="/tabs">Tabs</BreadcrumbItem>
  <BreadcrumbItem>Icon tabs</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white py-8">Icon Tabs</h1>

<Htwo label="Examples" />

<ExampleDiv>
	<IconTabs {tabs} />
</ExampleDiv>

```html
<script>
	import { IconTabs } from 'flowbite-svelte';
	import {
		UserCircle,
		ViewGrid,
		Adjustments,
		ClipboardList
	} from 'svelte-heros';

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircle,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGrid,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: Adjustments,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardList,
			iconSize: 18,
		}
	];
</script>

<IconTabs {tabs} />
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow {items} rowState='hover' />
</TableProp>