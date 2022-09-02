<script lang="ts">
	import type { Placement } from '@popperjs/core';
	import ChevronDown from './ChevronDown.svelte';
	import ChevronLeft from './ChevronLeft.svelte';
	import ChevronUp from './ChevronUp.svelte';
	import ChevronRight from './ChevronRight.svelte';

	export let placement: Placement = 'bottom';

	const icons = {
		top: ChevronUp,
		right: ChevronRight,
		bottom: ChevronDown,
		left: ChevronLeft
	};
	// @ts-ignore
	let icon;
	$: icon = icons[placement.split('-')[0]] ?? ChevronDown;
</script>

{#if placement.split('-')[0] === 'left'}
	<ChevronLeft class="h-4 w-4 mr-2" />
	<slot />
{:else}
	<slot />
	<svelte:component this={icon} class="h-4 w-4 ml-2" />
{/if}
