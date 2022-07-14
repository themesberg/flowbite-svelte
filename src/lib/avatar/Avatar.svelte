<script lang="ts">
	import classNames from 'classnames';

	import AvatarPlaceholder from './Placeholder.svelte';
	import Dot from './Dot.svelte';
	import type { DotType } from '$lib/types';

	export let src: string = '';

	export let rounded: boolean = false;
	export let border: boolean = false;
	export let stacked: boolean = false;

	export let dot: DotType = { top: false, color: 'bg-gray-300 dark:bg-gray-500' };
	export let alt: string = '';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

	// export let ring: string = 'ring-gray-300 dark:ring-gray-500';

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
		$$props.class
	);
</script>

<Dot show={$$props.dot} {rounded} {...dot} {size}>
	{#if src}
		<img class={avatarClass} {alt} {src} />
	{:else if $$slots.default}
		<a
			class="flex justify-center items-center {avatarClass} text-xs font-medium text-white bg-gray-700 hover:bg-gray-600"
			href="#"
			><slot />
		</a>
	{:else}
		<div class={avatarClass}>
			<AvatarPlaceholder {rounded} />
		</div>
	{/if}
</Dot>
