---
layout: timelineLayout
---

<script lang="ts">
	import { Htwo, ExampleDiv, GitHubSource, CompoDescription, TableProp, TableDefaultRow} from '../utils'
	import { Timeline, TimelineItem, TimelineItemVertical, TimelineItemHorizontal, TimelineHorizontal, Activity, ActivityItem, Group, GroupItem, Breadcrumb, BreadcrumbItem } from '$lib'
  import { Calendar, Adjustments, Home } from 'svelte-heros';
	
  import componentProps1 from '../props/Timeline.json'
  import componentProps2 from '../props/TimelineItem.json'
	import componentProps3 from '../props/TimelineItemVertical.json'
	import componentProps4 from '../props/TimelineHorizontal.json'
	import componentProps5 from '../props/TimelineItemHorizontal.json'
	import componentProps6 from '../props/Activity.json'
  import componentProps7 from '../props/ActivityItem.json'
  import componentProps8 from '../props/Group.json'
  import componentProps9 from '../props/GroupItem.json'
  let items1 = componentProps1.props
  let items2 = componentProps2.props
	let items3 = componentProps3.props
	let items4 = componentProps4.props
  let items5 = componentProps5.props
	let items6 = componentProps6.props
  let items7 = componentProps7.props
	let items8 = componentProps8.props
  let items9 = componentProps9.props
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

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: Calendar,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Adjustments,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Calendar,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		}
	];
	let activities = [
		{
			title:
				'Bonnie moved <a href="/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
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

	let groupTimelines = [
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

<Breadcrumb>
  <BreadcrumbItem href="/" home >Home</BreadcrumbItem>
  <BreadcrumbItem>Timelines</BreadcrumbItem>
</Breadcrumb>

<h1 class="text-3xl w-full dark:text-white pt-8 pb-4">Timeline</h1>

<CompoDescription>Get started with the responsive timeline component to show data in a chronological order with support for multiple styles, sizes, and variants</CompoDescription>

<ExampleDiv>
<GitHubSource href="timelines/Timeline.svelte">Timeline</GitHubSource>
<GitHubSource href="timelines/TimelineItem.svelte">TimelineItem</GitHubSource>
<GitHubSource href="timelines/TimelineItemVertical.svelte">TimelineItemVertical</GitHubSource>
<GitHubSource href="timelines/TimelineItemHorizontal.svelte">TimelineItemHorizontal</GitHubSource>
<GitHubSource href="timelines/Activity.svelte">Activity</GitHubSource>
<GitHubSource href="timelines/ActivityItem.svelte">ActivityItem</GitHubSource>
<GitHubSource href="timelines/Group.svelte">Group</GitHubSource>
<GitHubSource href="timelines/GroupItem.svelte">GroupItem</GitHubSource>
</ExampleDiv>

The timeline component can be used to show series of data in a chronological order for use cases such as activity feeds, user actions, application updates, and more.

<Htwo label="Setup" />

```html
<script>
	import { Timeline, TimelineItem, TimelineItemVertical, TimelineItemHorizontal, TimelineHorizontal, Activity, ActivityItem, Group, GroupItem } from 'flowbite-svelte';
</script>
```

<Htwo label="Default timeline" />

<ExampleDiv>
  <Timeline>
    <TimelineItem {timelineItems} />
  </Timeline>
</ExampleDiv>

```html
<script lang="ts">
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

<Htwo label="Vertical Timeline" />

Use this vertical timeline component with icons and badges to show a more advanced set of data.

<ExampleDiv>
  <Timeline>
    <TimelineItemVertical timelineItems={timelineItems2} />
  </Timeline>
</ExampleDiv>

```html
<script>
	import { Calendar, Adjustments } from 'svelte-heros';

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: Calendar,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Adjustments,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Calendar,
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

<Htwo label="Horizontal Timeline" />

Use this horizontally aligned timeline component to show a series of data in a chronological order.

<ExampleDiv>
  <TimelineHorizontal>
    <TimelineItemHorizontal timelineItems={timelineItems2} />
  </TimelineHorizontal>
</ExampleDiv>

```html
<script lang="ts">
	import { Calendar, Adjustments } from 'svelte-heros';

	let timelineItems2 = [
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			href: '/',
			icon: Calendar,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			linkname: 'Learn more',
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'March 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Adjustments,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		},
		{
			date: 'February 2022',
			title: 'Lorem ipsum dolor sit amet',
			icon: Calendar,
			iconSize:14,
			iconClass: "text-blue-700 dark:text-red-500",
			text: 'Consectetur adipiscing elit. Aenean condimentum erat vitae elit convallis molestie. Maecenas felis nisl, semper vitae venenatis non'
		}
	];
</script>

<TimelineHorizontal>
  <TimelineItemHorizontal timelineItems={timelineItems2} />
</TimelineHorizontal>
```

<Htwo label="Activity Log" />

This component can be used to show the timline of a user’s activity history inside your application by using an avatar, datetime, description, and links to specific pages.

<ExampleDiv>
  <Activity>
    <ActivityItem {activities} />
  </Activity>
</ExampleDiv>

```html
<script lang="ts">
	let activities = [
		{
			title:
				'Bonnie moved <a href="/" class="font-semibold text-blue-600 dark:text-blue-500 hover:underline">Jese Leos</a> to <span class="bg-gray-100 text-gray-800 text-xs font-normal mr-2 px-2.5 py-0.5 rounded dark:bg-gray-600 dark:text-gray-300">Funny Group</span>',
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

<Htwo label="Grouped timeline" />

Use this component to group multiple data entries inside a single date and show elements like the avatar, title, description, tag and link to a relevant page.

<ExampleDiv>
  <Group date="January 13th, 2022">
    <GroupItem timelines={groupTimelines} />
  </Group>
</ExampleDiv>

```html
<script lang="ts">
	let groupTimelines = [
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

<p>The component has the following props, type, and default values. See <a href="/pages/types">types 
 page</a> for type information.</p>

<h3 class='text-xl w-full dark:text-white py-4'>Timeline</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items1} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TimelineItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items2} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TimelineItemVertical</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items3} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TimelineHorizontal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items4} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>TimelineItemHorizontal</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items5} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Activity</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items6} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>ActivityItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items7} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>Group</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items8} rowState='hover' />
</TableProp>

<h3 class='text-xl w-full dark:text-white py-4'>GroupItem</h3>

<TableProp header={propHeader} {divClass} {theadClass}>
  <TableDefaultRow items={items9} rowState='hover' />
</TableProp>