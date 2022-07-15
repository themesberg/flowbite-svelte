<script lang="ts">
	export let value: string = '';
	export let id: string = 'user_avatar';
	export let inputClass: string =
		'block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400';
</script>

<input
	{...$$restProps}
	bind:value
	class={inputClass}
	aria-describedby="{id}_help"
	{id}
	type="file"
/>
