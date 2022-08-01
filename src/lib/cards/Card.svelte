<script lang="ts">
	import classNames from 'classnames';
	import { setContext } from 'svelte';

	export let href: string = undefined;
	export let horizontal: boolean = false;
	export let reverse: boolean = false;
	export let img: string = undefined;
	export let padding: 'sm' | 'md' | 'lg' = 'lg';

	setContext('background', true);

	const paddings = {
		sm: 'p-4',
		md: 'p-5',
		lg: 'p-6',
		xl: 'p-8'
	};

	let innerPdding;
	$: innerPdding = paddings[padding];

	let cardClass;
	$: cardClass = classNames(
		'block max-w-sm',
		'flex',
		reverse ? 'flex-col-reverse' : 'flex-col',
		horizontal && (reverse ? 'md:flex-row-reverse md:max-w-xl' : 'md:flex-row md:max-w-xl'),
		'bg-white dark:bg-gray-800 shadow-md',
		'text-gray-500 dark:text-gray-400',
		'rounded-lg border border-gray-200 dark:border-gray-700',
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

<svelte:element this={href ? 'a' : 'div'} {href} class={cardClass}>
	{#if img}
		<img class={imgClass} src={img} alt="" />
		<div class={innerPdding}>
			<slot />
		</div>
	{:else}
		<div><slot /></div>
	{/if}
</svelte:element>
