<script lang="ts">
	import Change from './Change.svelte';

	export let title: string;
	export let subtitle: string = '';
	export let change: number = 0;
</script>

<div>
	<slot name="icon" />
	<h3 class="text-gray-500 dark:text-gray-400">{title}</h3>
	<h4 class="text-xl font-bold dark:text-white">{subtitle}</h4>
	{#if change}
		<Change value={change} size="sm" equalHeight />
	{/if}
</div>
