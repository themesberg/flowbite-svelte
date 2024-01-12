<script lang="ts">
	interface Props {
		children: any;
		href?: string | undefined;
		aClass?: string | undefined;
		activeClass?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	import { page } from '$app/stores';
	let currentUrl = $state();
	$effect(() => {
		currentUrl = $page.url.pathname;
	});
	let { children, href, aClass, activeClass, ...attributes } = $props<Props>();
	let aCls: string = twMerge(
		'flex items-center p-2 ps-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
		aClass
	);
	let activeCls: string = twMerge(
		'flex items-center p-2 ps-11 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700',
		activeClass
	);
</script>

<li>
	<a {...attributes} {href} class={currentUrl === href ? activeCls : aCls}>
		{@render children()}
	</a>
</li>
