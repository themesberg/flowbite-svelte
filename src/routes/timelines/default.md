---
layout: timelineLayout
---

<script lang="ts">
	import {
		Timeline,
		TimelineItem,
	} from '$lib/index';

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
	
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Default timeline</h1>

<div
  class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Timeline>
    <TimelineItem {timelineItems} />
  </Timeline>
</div>

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

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

```js
// Timeline
let olClass = 'relative border-l border-gray-200 dark:border-gray-700';

// TimelineItem
interface TimelineItemType {
    date: Date | string;
    title: string;
    icon?: typeof SvelteComponent;
    href?: string;
    linkname?: string;
    text?: HTMLElement | string;
}
let timelineItems: TimelineItemType[];
```
