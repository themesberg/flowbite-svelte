---
layout: timelineLayout
---

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

<h1 class="text-3xl w-full dark:text-white py-8">Grouped timeline</h1>

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

<h2 class="text-2xl mt-8 dark:text-white pt-16 pb-8">Props</h2>

```js
// Group
let divClass =
		'p-5 mb-4 bg-gray-50 rounded-lg border border-gray-100 dark:bg-gray-800 dark:border-gray-700';
let timeClass = 'text-lg font-semibold text-gray-900 dark:text-white';
let date: Date | string;

// GroupItem
interface GroupTimelineType {
    title: string | HTMLElement;
    src: string;
    alt: string;
    href?: string;
    isPrivate?: boolean;
    comment?: string | HTMLElement;
}

let timelines: GroupTimelineType[];
```
