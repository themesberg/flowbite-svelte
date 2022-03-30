---
layout: timelineLayout
---

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
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Horizontal timeline</h1>

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

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

```js
// TimelineHorizontal
let olClass = 'items-center sm:flex';

// TimelineItemHorizontal
interface TimelineItemHorizontalType {
  date: Date | string;
  title: string;
  icon?: typeof SvelteComponent;
  text?: HTMLElement | string;
}

let timelineItems: TimelineItemHorizontalType[];
```