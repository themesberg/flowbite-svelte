---
layout: timelineLayout
---

<script lang="ts">
	import {
		Timeline,
		TimelineItemVertical,
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

</script>

<h1 class="text-3xl w-full dark:text-white py-8">Vertical timeline</h1>

<div
  class="container rounded-xl my-4 mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
  <Timeline>
    <TimelineItemVertical timelineItems={timelineItems2} />
  </Timeline>
</div>

```html

<script lang="ts">
	import {
		Timeline,
		TimelineItemVertical,
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

</script>

<Timeline>
  <TimelineItemVertical timelineItems={timelineItems2} />
</Timeline>
```

<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

```js
// Timeline
let olClass = 'relative border-l border-gray-200 dark:border-gray-700';

// TimelineItemVertical
interface TimelineItemVerticalType {
    date: Date | string;
    title: string;
    icon?: typeof SvelteComponent;
    href?: string;
    linkname?: string;
    text?: HTMLElement | string;
}
let timelineItems: TimelineItemVerticalType[];
```