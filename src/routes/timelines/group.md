---
layout: timelineLayout
---

<script lang="ts">
	import { Group, GroupItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import componentProps1 from '../props/Group.json'
  import componentProps2 from '../props/GroupItem.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'


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

<h2 class="text-2xl w-full dark:text-white py-4">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>Group</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>GroupItem</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>