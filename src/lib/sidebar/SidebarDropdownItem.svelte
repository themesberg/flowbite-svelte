<script lang="ts">
	interface Props {
		children?: any;
		label?: string;
		href?: string | undefined;
		aclass?: string | undefined;
		activeClass?: string | undefined;
	}

	import { twMerge } from 'tailwind-merge';

	import { page } from '$app/stores';
	let currentUrl = $state();
	$effect(() => {
		currentUrl = $page.url.pathname;
	});
	let { children, label, href, aclass, activeClass, ...attributes } = $props<Props>();
	let aCls: string = twMerge(
		'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
		aclass
	);
	let activeCls: string = twMerge(
		'flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 bg-gray-200 dark:bg-gray-700 ',
		activeClass
	);
</script>

<li>
	<a {...attributes} {href} class={currentUrl === href ? activeCls : aCls}>
		{label}
		{#if children}
			{@render children()}
		{/if}
	</a>
</li>
