<script lang="ts">
	import classNames from 'classnames';
	import type { SvelteComponent } from 'svelte';
	// import type { InputType } from '../types';

	// export let type: InputType = 'text';
	export let value: string = '';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let icon: typeof SvelteComponent;
	export let noBorder: boolean = false;
	export let inputClass: string =
		'rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let spanClass: string =
		'inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300 dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600';
	export let noBorderInputClass: string =
		'bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10   dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let pointerEvent: boolean = false;
	export let noBorderDivClass: string = 'flex absolute inset-y-0 left-0 items-center pl-3';
	export let iconClass: string = 'mr-2';
</script>

{#if noBorder}
	<div class="relative">
		<span
			class={classNames(
				noBorderDivClass,
				{
					'p-2 sm:text-xs': size === 'sm',
					'p-2.5 text-sm': size === 'md',
					'sm:text-md p-4': size === 'lg'
				},
				pointerEvent ? 'cursor-pointer' : 'pointer-events-none'
			)}
		>
			<svelte:component
				this={icon}
				on:click
				size={classNames({
					16: size === 'sm',
					18: size === 'md',
					20: size === 'lg'
				})}
				class={iconClass}
			/>
		</span>
		<input
			{...$$restProps}
			bind:value
			class={classNames(
				noBorderInputClass,
				{
					'p-2 sm:text-xs': size === 'sm',
					'p-2.5 text-sm': size === 'md',
					'sm:text-md p-4': size === 'lg'
				},
				$$props.class
			)}
		/>
	</div>
{:else}
	<div class="flex">
		<div class={spanClass}>
			<svelte:component
				this={icon}
				on:click
				size={classNames({
					16: size === 'sm',
					18: size === 'md',
					20: size === 'lg'
				})}
				class={classNames(iconClass, pointerEvent ? 'cursor-pointer' : 'pointer-events-none')}
			/>
		</div>
		<input
			{...$$restProps}
			bind:value
			class={classNames(
				inputClass,
				{
					'p-2 sm:text-xs': size === 'sm',
					'p-2.5 text-sm': size === 'md',
					'sm:text-md p-4': size === 'lg'
				},
				$$props.class
			)}
		/>
	</div>
{/if}
