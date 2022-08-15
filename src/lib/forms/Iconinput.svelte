<script lang="ts">
	import classNames from 'classnames';
	import type { InputType } from '../types';
	import type { SvelteComponent } from 'svelte';

	export let type: InputType = 'text';
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
	export let noBorderDivClass: string =
		'flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none';
	export let iconClass: string = 'mr-2';

	const setType = (node) => {
		node.type = type;
	};
</script>

{#if noBorder}
	<div class="relative">
		<div
			class={classNames(noBorderDivClass, {
				'p-2 sm:text-xs': size === 'sm',
				'p-2.5 text-sm': size === 'md',
				'sm:text-md p-4': size === 'lg'
			})}
		>
			<svelte:component
				this={icon}
				size={classNames({
					16: size === 'sm',
					18: size === 'md',
					20: size === 'lg'
				})}
				class={iconClass}
			/>
		</div>
		<input
			{...$$restProps}
			bind:value
			use:setType
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
		<span class={spanClass}>
			<svelte:component
				this={icon}
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
			{type}
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
