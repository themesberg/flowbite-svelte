<script lang="ts">
	import { getContext } from 'svelte';
	import { twMerge } from 'tailwind-merge';
	import { type SidebarCtxType, type SidebarItemProps as Props } from './';

	let {
		iconSlot,
		subtext,
		href,
		label,
		spanClass = 'ms-3',
		activeClass,
		nonActiveClass,
		aClass,
		active,
		class: className,
		...restProps
	}: Props = $props();

	const context = getContext<SidebarCtxType>('sidebarContext') ?? {};
	const activeUrlStore = getContext('activeUrl') as {
		subscribe: (callback: (value: string) => void) => void;
	};

	let sidebarUrl = $state('');
	activeUrlStore.subscribe((value) => {
		sidebarUrl = value;
	});
	let activeItem = $state();

	// $effect(() => {
	//   activeItem = sidebarUrl ? href === sidebarUrl : false;
	// });
	$effect(() => {
		// Prioritize the explicit 'active' prop if provided
		activeItem = active !== undefined ? active : sidebarUrl ? href === sidebarUrl : false;
	});

	// let aCls = $derived((activeItem ?? sidebarUrl === href) ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
	let aCls = $derived(
		(activeItem ?? sidebarUrl === href)
			? (activeClass ?? context.activeClass)
			: (nonActiveClass ?? context.nonActiveClass)
	);
</script>

<li class={className}>
	<a
		onclick={context.closeSidebar}
		{...restProps}
		{href}
		aria-current={(activeItem ?? sidebarUrl === href) ? 'page' : undefined}
		class={twMerge(aCls, aClass)}
	>
		{#if iconSlot}
			{@render iconSlot()}
		{/if}
		<span class={spanClass}>{label}</span>
		{#if subtext}
			{@render subtext()}
		{/if}
	</a>
</li>

