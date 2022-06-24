<script lang="ts">
	import classNames from 'classnames';
	import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
	export let divClass: string = ' justify-between items-center w-full md:flex md:w-auto md:order-1';

	export let ulClass =
		'flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium';
	export let hidden = true;
	// $: hidden;
</script>

{#if !hidden}
	<div
		{...$$restProps}
		class={classNames(divClass, $$props.class)}
		id="mobile-menu"
		transition:slide={{ delay: 250, duration: 500, easing: quintOut }}
	>
		<ul class="{ulClass} {$$props.class || ''}">
			<slot />
		</ul>
	</div>
{:else}
	<div {...$$restProps} class={classNames(divClass, $$props.class)} {hidden} id="mobile-menu">
		<ul class="{ulClass} {$$props.class || ''}">
			<slot />
		</ul>
	</div>
{/if}
