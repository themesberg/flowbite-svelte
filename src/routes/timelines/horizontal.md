---
layout: timelineLayout
---

<script lang="ts">
	import { TimelineItemHorizontal, TimelineHorizontal, Table, TableDefaultRow } from '$lib/index';
	import { CalendarIconOutline, AdjustmentsIconSolid } from '@codewithshin/svelte-heroicons';
	import componentProps1 from '../props/TimelineItemHorizontal.json'
  import componentProps2 from '../props/TimelineHorizontal.json'
  export let items1 = componentProps1.props
  export let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	// console.log(items)
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg'

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: CalendarIconOutline,
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: AdjustmentsIconSolid,
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: CalendarIconOutline,
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		}
	];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Timeline</h1>

<div
  class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <TimelineHorizontal>
    <TimelineItemHorizontal timelineItems={timelineItems2} />
  </TimelineHorizontal>
</div>

```html

<script lang="ts">
	import {
		TimelineItemHorizontal,
		TimelineHorizontal,
	} from '$lib/index';
	import { CalendarIconOutline, AdjustmentsIconSolid } from '@codewithshin/svelte-heroicons';

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: CalendarIconOutline,
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: AdjustmentsIconSolid,
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: CalendarIconOutline,
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		}
	];

<TimelineHorizontal>
  <TimelineItemHorizontal timelineItems={timelineItems2} />
</TimelineHorizontal>
</script>
```

<h2 class="text-2xl w-full dark:text-white py-8">Props</h2>

<p>The component has the following props, type, and default values. See <a href="/type-list" class="text-blue-600 hover:underline dark:text-blue-500">type-list page</a> for type information.</p>

<h3>TimelineItemHorizontal</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>TimelineHorizontal</h3>

<Table header={propHeader} {divClass} >
  <TableDefaultRow items={items2} rowState='hover' />
</Table>