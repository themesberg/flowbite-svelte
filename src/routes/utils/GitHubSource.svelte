<script lang="ts">
	import Github from './icons/Github.svelte';
	export let pClass = 'text-gray-700 dark:text-white py-0';
	export let href = '';
</script>

<p class={pClass}>
	<a href="https://github.com/themesberg/flowbite-svelte/tree/main/src/lib/{href}" target="_blank">
		<Github class="inline px-2 mb-1" size="34" />
		<slot />: View Source Code</a
	>
</p>
