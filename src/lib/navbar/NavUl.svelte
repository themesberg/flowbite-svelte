<script lang="ts">
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	import Frame from '$lib/utils/Frame.svelte';

	export let divClass: string = 'w-full md:block md:w-auto';
	export let ulClass: string =
		'flex flex-col p-4 mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
	export let hidden: boolean = true;

	let _divClass;
	$: _divClass = classNames(divClass, $$props.class);

	let _ulClass;
	$: _ulClass = classNames(
		ulClass,
		// 'divide-y md:divide-y-0 divide-gray-100 dark:divide-gray-700',
		$$props.class
	);
</script>

{#if !hidden}
	<div {...$$restProps} class={_divClass} transition:slide={{ delay: 250, duration: 500, easing: quintOut }}>
		<Frame tag="ul" border rounded color="navbarUl" class={_ulClass}>
			<slot />
		</Frame>
	</div>
{:else}
	<div {...$$restProps} class={_divClass} {hidden}>
		<ul class={_ulClass}>
			<slot />
		</ul>
	</div>
{/if}
