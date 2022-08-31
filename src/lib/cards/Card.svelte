<script lang="ts">
	import classNames from 'classnames';
	import Frame from '$lib/utils/Frame.svelte';

	export let href: string = undefined;
	export let horizontal: boolean = false;
	export let reverse: boolean = false;
	export let img: string = undefined;
	export let padding: 'none' | 'sm' | 'md' | 'lg' = 'lg';
	export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'sm';

	const paddings = {
		none: 'p-0',
		sm: 'p-4',
		md: 'p-5',
		lg: 'p-6',
		xl: 'p-8'
	};

	const sizes = {
		xs: 'max-w-xs',
		sm: 'max-w-sm',
		md: 'max-w-lg',
		lg: 'max-w-2xl',
		xl: 'max-w-screen-xl'
	};

	let innerPdding;
	$: innerPdding = paddings[padding];

	let cardClass;
	$: cardClass = classNames(
		'flex',
		reverse ? 'flex-col-reverse' : 'flex-col',
		horizontal && (reverse ? 'md:flex-row-reverse md:max-w-xl' : 'md:flex-row md:max-w-xl'),
		href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
		!img && innerPdding,
		$$props.class
	);

	let imgClass;
	$: imgClass = classNames(
		reverse ? 'rounded-b-lg' : 'rounded-t-lg',
		horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
		horizontal && (reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg')
	);
</script>

<Frame class={sizes[size]} rounded shadow border>
	<svelte:element this={href ? 'a' : 'div'} {href} class={cardClass}>
		{#if img}
			<img class={imgClass} src={img} alt="" />
			<div class={innerPdding}>
				<slot />
			</div>
		{:else}
			<slot />
		{/if}
	</svelte:element>
</Frame>
