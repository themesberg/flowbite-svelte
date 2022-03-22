<script lang="ts">
	export let value: string = '';
	export let id = 'message';
	export let name = 'message';
	export let label = 'Your message';
	export let rows = 4;
	export let placeholder = 'Leave a comment...';
	export let labelClass = 'block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400';
	export let textareaClass =
		'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
	export let helper: string;
	export let helperClass = 'mt-2 text-sm text-gray-500 dark:text-gray-400';
</script>

<label for={id} class={labelClass}>{label}</label>
<textarea bind:value {id} {name} {rows} class={textareaClass} {placeholder} />
{#if helper}
	<p class={helperClass}>{@html helper}</p>
{/if}
