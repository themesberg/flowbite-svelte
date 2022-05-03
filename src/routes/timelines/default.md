---
layout: timelineLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { Timeline, TimelineItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
  import componentProps1 from '../props/Timeline.json'
  import componentProps2 from '../props/TimelineItem.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'

	let timelineItems = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl.'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl.'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl.'
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
      label:'Timeline default',
      href:'/timelines/default'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Default Timeline</h1>

<ExampleDiv>
  <Timeline>
    <TimelineItem {timelineItems} />
  </Timeline>
</ExampleDiv>

```html
<script lang="ts">
	import {
		Timeline,
		TimelineItem,
	} from 'flowbite-svelte';

	let timelineItems = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			text: 'Consectetur adipiscing elit...'
		}
	];
</script>

<Timeline>
  <TimelineItem {timelineItems} />
</Timeline>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/type-list">type-list page</a> for type information.</p>

<h3>Timeline</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>TimelineItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>