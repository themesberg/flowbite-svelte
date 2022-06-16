<script lang="ts">
	import Tooltip from '$lib/tooltips/Tooltip.svelte';
	import Button from '$lib/buttons/Button.svelte';
	import classNames from 'classnames';
	import { ChevronUp, ChevronRight, ChevronDown, ChevronLeft } from 'svelte-heros';
	import type { Placement } from '@floating-ui/dom';
	export let label: string = '';
	export let inline: boolean = false;
	export let tooltipArrow: boolean = false;
	export let arrowIcon: boolean = true;
	let placement: Placement;
	$: placement = inline ? 'bottom-start' : 'bottom';
	const icons = {
		top: ChevronUp,
		right: ChevronRight,
		bottom: ChevronDown,
		left: ChevronLeft
	};
	// @ts-ignore
	$: icon = icons[placement.split('-')[0]];
</script>

<Tooltip
	class={classNames('w-44 !rounded !p-0', $$props.class)}
	style="auto"
	animation="duration-100"
	{placement}
	arrow={tooltipArrow}
	trigger="click"
>
	{#if inline}
		<button class="flex items-center">
			<slot name="label">{label}</slot>
			{#if arrowIcon}
				<svelte:component this={icon ?? ChevronDown} class="ml-2 h-4 w-4" />
			{/if}
		</button>
	{:else}
		<Button
			pill={$$props.pill}
			outline={$$props.outline}
			color={$$props.color}
			size={$$props.size}
			icon={$$props.icon}
			gradientDuoTone={$$props.gradientDuoTone}
			gradientMonochrome={$$props.gradientMonochrome}
		>
			<slot name="label">{label}</slot>
			{#if arrowIcon}
				<svelte:component this={icon ?? ChevronDown} class="ml-2 h-4 w-4" />
			{/if}
		</Button>
	{/if}
	<div slot="content">
		<ul class="py-1">
			<slot />
		</ul>
	</div>
</Tooltip>
