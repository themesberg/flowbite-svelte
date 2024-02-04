<script lang="ts">
	interface Props {
		icon?: any;
		subtext?: any;
		href?: string | undefined;
		label?: string | undefined;
		spanclass?: string | undefined;
		activeClass?: string | undefined;
		nonActiveClass?: string | undefined;
	}
	import { getContext } from 'svelte';
	import type { SidebarType } from '$lib/types';
	import { page } from '$app/stores';
	import { twMerge } from 'tailwind-merge';

	let { icon, subtext, href, label, spanclass, activeClass, nonActiveClass, ...attributes } =
		$props<Props>();
	const context = getContext<SidebarType>('sidebarContext') ?? {};
	let currentUrl = $state();
	let spanCls: string = twMerge('ms-3', spanclass);

	$effect(() => {
		currentUrl = $page.url.pathname;
	});

	let aCls = $derived(
			currentUrl === href
				? activeClass ?? context.activeClass
				: nonActiveClass ?? context.nonActiveClass
	);
	// $inspect('aCls', aCls)
</script>

<li>
	<a {...attributes} {href} aria-current={currentUrl === href} class={aCls}>
		{#if icon}
			{@render icon()}
		{/if}
		<span class={spanCls}>{label}</span>
		{#if subtext}
			{@render subtext()}
		{/if}
	</a>
</li>
