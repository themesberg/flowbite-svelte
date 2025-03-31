<script lang="ts">
	import { type AlertProps as Props, alert } from '.';
	import { CloseButton } from '$lib';
	import { fade } from 'svelte/transition';
	import type { ParamsType } from '$lib/types';

	let {
		children,
		icon,
		alertStatus = $bindable(true),
		closeIcon,
		color = 'primary',
		rounded = true,
		border,
		class: className,
		dismissable,
		transition = fade,
		params,
		onclick,
		...restProps
	}: Props = $props();

	let divCls = $derived(
		alert({
			color,
			rounded,
			border,
			icon: !!icon,
			dismissable,
			className
		})
	);
	// $inspect('transition: ', transition);
</script>

{#if alertStatus}
	<div role="alert" {...restProps} transition:transition={params as ParamsType} class={divCls}>
		{#if icon}
			{@render icon()}
		{/if}

		{#if icon || dismissable}
			<div>
				{@render children()}
			</div>
		{:else}
			{@render children()}
		{/if}

		{#if dismissable}
			{#if closeIcon}
				<button
					type="button"
					class="text-primary-500 hover:bg-primary-200 focus:ring-primary-400 dark:hover:bg-primary-800 dark:hover:text-primary-300 m-0.5 ms-1.5 -me-1.5 rounded p-0.5 whitespace-normal focus:ring-1 focus:outline-none"
					aria-label="Remove badge"
					onclick={() => {
						alertStatus = false;
					}}
				>
					<span class="sr-only">Remove alert</span>
					{#if icon}
						{@render icon()}
					{/if}
				</button>
			{:else if onclick}
				<CloseButton
					class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700"
					{color}
					ariaLabel="Remove badge"
					{onclick}
				/>
			{:else}
				<CloseButton
					class="-my-1.5 ms-auto -me-1.5 dark:hover:bg-gray-700"
					{color}
					ariaLabel="Remove alert"
					onclick={() => {
						alertStatus = false;
					}}
				/>
			{/if}
		{/if}
	</div>
{/if}

