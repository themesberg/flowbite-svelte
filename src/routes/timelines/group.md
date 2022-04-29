---
layout: timelineLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
	import { Group, GroupItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import componentProps1 from '../props/Group.json'
  import componentProps2 from '../props/GroupItem.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'


	let timelines = [
		{
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
			src: '/images/profile-picture-1.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		},
		{
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
			src: '/images/profile-picture-2.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		}
	];

  let crumbs = [
    {
      label:'Home',
      href:'/'
    },
    {
      label:'Timelines',
      href:'/timelines/'
    },
    {
      label:'Timeline group',
      href:'/timelines/group'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Grouped Timeline</h1>

<div
  class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Group date="January 13th, 2022">
    <GroupItem {timelines} />
  </Group>
</div>

```html

<script lang="ts">
	import {
		Group,
		GroupItem
	} from '$lib/index';

	let timelines = [
		{
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span class="font-medium text-gray-900 dark:text-white">Bonnie Green\'s</span> post in <span class="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span>',
			src: '/images/profile-picture-1.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		},
		{
			title:
				'<span class="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span class="font-medium text-gray-900 dark:text-white">Thomas Lean\'s</span> comment',
			src: '/images/profile-picture-2.webp',
			alt: 'alt here',
			href: '/',
			isPrivate: true,
			comment: '"I wanted to share a webinar zeroheight."'
		}
	];
</script>

<Group date="January 13th, 2022">
  <GroupItem {timelines} />
</Group>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>Group</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>GroupItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>