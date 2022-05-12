---
layout: timelineLayout
---

<script lang="ts">
	import Htwo from '../utils/Htwo.svelte'
  import ExampleDiv from '../utils/ExampleDiv.svelte'
	import { Activity, ActivityItem, Table, TableDefaultRow, Breadcrumb } from '$lib/index';
	import componentProps1 from '../props/Activity.json'
  import componentProps2 from '../props/ActivityItem.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let propHeader = ['Name', 'Type', 'Default']
	
	let divClass='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
let theadClass ='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-white'


	let activities = [
		{
			title:
				'Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
			date: 'just now',
			alt: 'image alt here',
			src: '/images/profile-picture-2.webp'
		},
		{
			title: 'We don’t serve their kind here! What? Your droids. ',
			date: '2 hours ago',
			alt: 'image alt here',
			src: '/images/profile-picture-2.webp',
			text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
		},
		{
			title: 'They’ll have to wait outside. We don’t want them here. ',
			date: '1 day ago',
			alt: 'image alt here',
			src: '/images/profile-picture-3.webp'
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
      label:'Timeline activity',
      href:'/timelines/activity'
    },
  ]
</script>

<Breadcrumb {crumbs}/>

<h1 class="text-3xl w-full dark:text-white py-8">Activity Log</h1>

<ExampleDiv>
  <Activity>
    <ActivityItem {activities} />
  </Activity>
</ExampleDiv>

```html

<script lang="ts">
	import {
		Activity,
		ActivityItem,
	} from '$lib/index';

	let activities = [
		{
			title:
				'Bonnie moved <a href="#" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
			date: 'just now',
			alt: 'image alt here',
			src: '/images/profile-picture-2.webp'
		},
		{
			title: 'We don’t serve their kind here! What? Your droids. ',
			date: '2 hours ago',
			alt: 'image alt here',
			src: '/images/profile-picture-2.webp',
			text: 'The approach will not be easy. You are required to maneuver straight down this trench and skim the surface to this point. The target area is only two meters wide. '
		},
		{
			title: 'They’ll have to wait outside. We don’t want them here. ',
			date: '1 day ago',
			alt: 'image alt here',
			src: '/images/profile-picture-3.webp'
		}
	];
</script>

<Activity>
  <ActivityItem {activities} />
</Activity>
```

<Htwo label="Props" />

<p>The component has the following props, type, and default values. See <a href="/types">type-list page</a> for type information.</p>

<h3>Activity</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</Table>

<h3>ActivityItem</h3>

<Table header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</Table>