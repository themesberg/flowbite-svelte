<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	import { page } from '$app/stores';
	interface Props {
		children: any;
		aclass?: string | undefined;
		href?: string | undefined;
		activeclass?: string | undefined;
	}

	let { aclass, children, href, activeclass, ...attributes } = $props<Props>();

	let currentUrl = $state();
	$effect(() => {
		currentUrl = $page.url.pathname;
	});
	const aCls = twMerge('block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white', aclass);
  const activeCls = twMerge('block px-4 py-2 text-primary-700 dark:text-primary-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white', activeclass)
</script>

<li>
	{#if href}
		<a {href} class={currentUrl === href ? activeCls : aCls} {...attributes}>
			{@render children()}
		</a>
	{/if}
</li>
