---
layout: tabLayout
---

<script>
	import { IconTabs } from '$lib/index';
	import {
		UserCircleIconSolid,
		ViewGridIconSolid,
		AdjustmentsIconSolid,
		ClipboardListIconSolid
	} from '@codewithshin/svelte-heroicons';

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleIconSolid
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridIconSolid
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsIconSolid
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListIconSolid
		}
	];
</script>

<h1 class="text-3xl w-full dark:text-white py-8">Icon Tabs</h1>

<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<IconTabs {tabs} />
</div>

```html
<script>
	import { IconTabs } from 'flowbite-svelte';
	import {
		UserCircleIconSolid,
		ViewGridIconSolid,
		AdjustmentsIconSolid,
		ClipboardListIconSolid
	} from '@codewithshin/svelte-heroicons';

	let tabs = [
		{
			name: 'Profile',
			active: true,
			href: '/',
			icon: UserCircleIconSolid
		},
		{
			name: 'Dashboard',
			active: false,
			href: '/',
			icon: ViewGridIconSolid
		},
		{
			name: 'Settings',
			active: false,
			href: '/',
			icon: AdjustmentsIconSolid
		},
		{
			name: 'Contacts',
			active: false,
			href: '/',
			icon: ClipboardListIconSolid
		}
	];
</script>

<IconTabs {tabs} />
```

<h2 class="text-2xl mt-8 dark:text-white py-8">Props</h2>

<p class="dark:text-white py-4 text-lg">The component has the following props, type, and default values:</p>

```js
interface IconTabType {
    name: string;
    active: boolean;
    href: string,
    rel?: string,
    icon?: typeof SvelteComponent;
}
let tabs: IconTabType[];
let iconClass = 'mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300';
```
