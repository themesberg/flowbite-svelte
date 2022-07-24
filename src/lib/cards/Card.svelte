<script lang="ts">
	import classNames from 'classnames';

	export let href: string = undefined;
	export let horizontal: boolean = false;
	export let reverse: boolean = false;
	export let img: string = undefined;

	let cardClass;
	$: cardClass = classNames(
		'block max-w-sm',
		'flex',
		reverse ? 'flex-col-reverse' : 'flex-col',
		horizontal && (reverse ? 'md:flex-row-reverse md:max-w-xl' : 'md:flex-row md:max-w-xl'),
		'bg-white dark:bg-gray-800 shadow-md',
		'rounded-lg border border-gray-200 dark:border-gray-700',
		href && 'hover:bg-gray-100 dark:hover:bg-gray-700',
		$$props.class
	);

	let imgClass = classNames(
		reverse ? 'rounded-b-lg' : 'rounded-t-lg',
		horizontal && 'object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none',
		horizontal && (reverse ? 'md:rounded-r-lg' : 'md:rounded-l-lg')
	);
</script>

<svelte:element this={href ? 'a' : 'div'} {href} class={cardClass}>
	{#if img}
		<img class={imgClass} src={img} alt="" />
	{/if}

	<div class="p-6">
		<slot />
	</div>
</svelte:element>
