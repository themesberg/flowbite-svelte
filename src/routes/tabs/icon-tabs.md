---
layout: tabLayout
---

<script>
	import { IconTabs, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import {
		UserCircleIconOutline,
		ViewGridIconOutline,
		AdjustmentsIconOutline,
		ClipboardListIconOutline
	} from '@codewithshin/svelte-heroicons';
	import componentProps from '../props/IconTabs.json'
  // Props table
  export let items = componentProps.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleIconOutline,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridIconOutline,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsIconOutline,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListIconOutline,
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

<h2 class="text-2xl mt-8 dark:text-white py-4">Examples</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<IconTabs {tabs} />
</div>

```html
<script>
	import { IconTabs } from 'flowbite-svelte';
	import {
		UserCircleIconOutline,
		ViewGridIconOutline,
		AdjustmentsIconOutline,
		ClipboardListIconOutline
	} from '@codewithshin/svelte-heroicons';

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleIconOutline,
			iconSize: 18,
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridIconOutline,
			iconSize: 18,
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsIconOutline,
			iconSize: 18,
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListIconOutline,
			iconSize: 18,
		}
	];
</script>

<IconTabs {tabs} />
```

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<Table header={propHeader} {divClass} >
  <TableDefaultRow {items} rowState='hover' />
</Table>