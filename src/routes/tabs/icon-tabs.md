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


<h2 class="text-2xl mt-8 dark:text-white py-8">Examples</h2>

<div
	class="container flex flex-wrap justify-center rounded-xl mx-auto bg-gradient-to-r bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 p-2 sm:p-6"
>
	<IconTabs {tabs} />
</div>
