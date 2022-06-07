<script lang="ts">
	import type { ButtonType } from '../types';
	export let type: ButtonType = 'button';
	export let btnClass =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white first:rounded-l-lg border-t border-b first:border last:rounded-r-md last:border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white';

	export let outlineClass =
		'inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-transparent  first:rounded-l-lg border-t border-b first:border last:rounded-r-md last:border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700';
	export let outline: boolean = false;
	export let href = '';

	if (outline) {
		btnClass = outlineClass;
	}
</script>

{#if href}
	<a {href} class="{btnClass} {$$props.class}" {...$$restProps} on:click><slot /></a>
{:else}
	<button {type} class="{btnClass} {$$props.class}" {...$$restProps} on:click>
		<slot />
	</button>
{/if}
