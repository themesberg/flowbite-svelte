<script lang="ts">
	import classNames from 'classnames';

	import AvatarPlaceholder from './Placeholder.svelte';
	import Dot from './Dot.svelte';
	import type { DotType } from '$lib/types';

	export let src: string = '';
	export let href: string = '#';

	export let rounded: boolean = false;
	export let border: boolean = false;
	export let stacked: boolean = false;

	export let dot: DotType = { top: false, color: 'bg-gray-300 dark:bg-gray-500' };
	export let alt: string = '';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	const sizes = {
		xs: 'w-6 h-6',
		sm: 'w-8 h-8',
		md: 'w-10 h-10',
		lg: 'w-20 h-20',
		xl: 'w-36 h-36'
	};

	let avatarClass;
	$: avatarClass = classNames(
		rounded ? 'rounded' : 'rounded-full',
		border && 'p-1 ring-2 ring-gray-300 dark:ring-gray-500',
		sizes[size],
		stacked && 'border-2 -ml-4 border-white dark:border-gray-800',
		'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300',
		$$props.class
	);
</script>

<Dot show={$$props.dot} {rounded} {...dot} {size} class={sizes[size]}>
	{#if src}
		<img {alt} {src} {...$$restProps} class={avatarClass} />
	{:else if $$slots.default}
		<svelte:element
			this={href ? 'a' : 'div'}
			{href}
			{...$$restProps}
			class="flex justify-center items-center text-xs font-medium {avatarClass}">
			<slot />
		</svelte:element>
	{:else}
		<svelte:element this={href ? 'a' : 'div'} {...$$restProps} class={avatarClass}>
			<AvatarPlaceholder {rounded} />
		</svelte:element>
	{/if}
</Dot>
