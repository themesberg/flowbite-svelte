<script lang="ts">
	import classNames from 'classnames';
	import type { ButtonType } from '../types';

	export let type: ButtonType = 'button';
	export let btnClass: string =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white first:rounded-l-lg border-t border-b last:rounded-r-md border-l last:border-r border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white';

	export let outlineClass: string =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent first:rounded-l-lg border-t border-b  last:rounded-r-md border-l last:border-r border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700';
	export let outline: boolean = false;
	export let href: string = '';

	if (outline) {
		btnClass = outlineClass;
	}
</script>

{#if href}
	<a
		{href}
		{...$$restProps}
		class={classNames(btnClass, $$props.class)}
		on:click
		on:change
		on:keydown
		on:keyup
		on:mouseenter
		on:mouseleave
		on:mouseenter><slot /></a
	>
{:else}
	<button
		{type}
		{...$$restProps}
		class={classNames(btnClass, $$props.class)}
		on:click
		on:change
		on:keydown
		on:keyup
		on:focus
		on:blur
		on:mouseenter
		on:mouseleave
		on:mouseenter
	>
		<slot />
	</button>
{/if}
