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
	export let labelClass: string =
		'flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent';
	export let placement: 'auto' | Placement = 'bottom';

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
		<button class={labelClass}>
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
