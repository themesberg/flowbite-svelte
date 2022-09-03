<script lang="ts">
	import classNames from 'classnames';
	import Button from '$lib/buttons/Button.svelte';
	import Popper from '$lib/utils/Popper.svelte';
	import Chevron from '$lib/utils/Chevron.svelte';
	import type { Placement } from '@popperjs/core';

	export let label: string = '';
	export let inline: boolean = false;
	export let arrowIcon: boolean = true;
	export let labelClass: string =
		'flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent';
	export let placement: Placement = 'bottom';
	export let open: boolean = false;

	let popoverClass;
	$: popoverClass = classNames('outline-none', $$props.class);
</script>

{#if label}
	<slot name="trigger">
		{#if inline}
			<button class={labelClass}>
				{#if arrowIcon}
					<Chevron {placement}><slot name="label">{label}</slot></Chevron>
				{:else}
					<slot name="label">{label}</slot>
				{/if}
			</button>
		{:else}
			<Button>
				{#if arrowIcon}
					<Chevron {placement}><slot name="label">{label}</slot></Chevron>
				{:else}
					<slot name="label">{label}</slot>
				{/if}
			</Button>
		{/if}
	</slot>
{/if}

<Popper
	rounded
	border
	shadow
	activeContent
	arrow={false}
	{placement}
	trigger="click"
	{...$$restProps}
	class={popoverClass}
	on:show
	bind:open>
	<slot name="content">
		<ul class="py-1">
			<slot />
		</ul>
	</slot>
</Popper>
