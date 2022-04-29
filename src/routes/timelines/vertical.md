---
layout: timelineLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
	import { Timeline, TimelineItemVertical, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { CalendarOutline, AdjustmentsOutline } from 'svelte-heros';
	import componentProps1 from '../props/Timeline.json'
  import componentProps2 from '../props/TimelineItemVertical.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: CalendarOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: AdjustmentsOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: CalendarOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
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
      label:'Timeline vertical',
      href:'/timelines/vertical'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Vertical Timeline</h1>

<div
  class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Timeline>
    <TimelineItemVertical timelineItems={timelineItems2} />
  </Timeline>
</div>

```html
<script>
	import { Timeline, TimelineItemVertical, } from 'flowbite-svelte';
	import { CalendarOutline, AdjustmentsOutline } from 'svelte-heros';

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: CalendarOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: AdjustmentsOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: CalendarOutline,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		}
	];

</script>

<Timeline>
  <TimelineItemVertical timelineItems={timelineItems2} />
</Timeline>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>Timeline</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>TimelineItemVertical</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>