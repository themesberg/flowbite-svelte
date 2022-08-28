<script lang="ts">
	import { setContext } from 'svelte';
	import Button from '$lib/buttons/Button.svelte';
	import Popper from '$lib/utils/Popper.svelte';
	import classNames from 'classnames';
	import ChevronUp from '../utils/ChevronUp.svelte';
	import ChevronRight from '../utils/ChevronRight.svelte';
	import ChevronDown from '../utils/ChevronDown.svelte';
	import ChevronLeft from '../utils/ChevronLeft.svelte';
	import generateId from '$lib/utils/generateId';
	import type { Placement } from '@popperjs/core';

	export let label: string = '';
	export let inline: boolean = false;
	export let arrowIcon: boolean = true;
	export let labelClass: string =
		'flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent';
	export let placement: 'auto' | Placement = 'bottom';
	export let open: boolean = false;
	export let triggers: string = undefined;

	let id = generateId();

	setContext('background', true);

	const icons = {
		top: ChevronUp,
		right: ChevronRight,
		bottom: ChevronDown,
		left: ChevronLeft
	};
	// @ts-ignore
	$: icon = icons[placement.split('-')[0]];

	let popoverClass;
	$: popoverClass = classNames(
		'rounded-lg shadow-sm',
		'bg-white dark:bg-gray-800',
		'text-gray-500 dark:text-gray-400',
		'border border-gray-200 dark:border-gray-700',
		'outline-none',
		$$props.class
	);
</script>

{#if label}
	<slot name="trigger">
		{#if inline}
			<button {id} class={labelClass} class:flex-row-reverse={icon == ChevronLeft}>
				<slot name="label">{label}</slot>
				{#if arrowIcon}
					<svelte:component
						this={icon ?? ChevronDown}
						class={classNames('h-4 w-4', icon == ChevronLeft ? 'mr-2' : 'ml-2')} />
				{/if}
			</button>
		{:else}
			<Button {id} {...$$restProps} class={icon == ChevronLeft && 'flex-row-reverse'}>
				<slot name="label">{label}</slot>
				{#if arrowIcon}
					<svelte:component
						this={icon ?? ChevronDown}
						class={classNames('h-4 w-4', icon == ChevronLeft ? 'mr-2' : 'ml-2')} />
				{/if}
			</Button>
		{/if}
	</slot>
{/if}

<Popper
	activeContent={true}
	arrow={false}
	{placement}
	{...$$restProps}
	class={popoverClass}
	trigger="click"
	on:show
	bind:open
	triggers={triggers ?? '#' + id}>
	<slot name="content">
		<ul class="py-1">
			<slot />
		</ul>
	</slot>
</Popper>
