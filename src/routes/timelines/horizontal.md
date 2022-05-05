---
layout: timelineLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { TimelineItemHorizontal, TimelineHorizontal, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import { CalendarOutline, AdjustmentsOutline } from 'svelte-heros';
	import componentProps1 from '../props/TimelineItemHorizontal.json'
  import componentProps2 from '../props/TimelineHorizontal.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
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
      label:'Timeline horizontal',
      href:'/timelines/horizontal'
    },
  ]
</script>

<Breadcrumb {crumbs}/>


<h1 class="text-3xl w-full dark:text-white py-8">Horizontal Timeline</h1>

<ExampleDiv>
  <TimelineHorizontal>
    <TimelineItemHorizontal timelineItems={timelineItems2} />
  </TimelineHorizontal>
</ExampleDiv>

```html

<script lang="ts">
	import {
		TimelineItemHorizontal,
		TimelineHorizontal,
	} from '$lib/index';
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

<TimelineHorizontal>
  <TimelineItemHorizontal timelineItems={timelineItems2} />
</TimelineHorizontal>
</script>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>TimelineItemHorizontal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>TimelineHorizontal</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>