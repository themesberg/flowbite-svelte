<script lang="ts">
	export let id = 'user_avatar';
	export let label = 'Upload file';
	export let labelClass =
		'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar';
	export let inputClass =
		'block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';
	export let divClass = 'mt-1 text-sm text-gray-500 dark:text-gray-300';
	export let helper;
</script>

<label class={labelClass} for={id}>{label}</label>
<input class={inputClass} aria-describedby="{id}_help" {id} type="file" />
{#if helper}
	<div class={divClass} id="{id}_help">{helper}</div>
{/if}
