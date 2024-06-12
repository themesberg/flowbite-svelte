<script lang="ts">
	export let value: string;
	export let period: string = '';
</script>

<div class="my-8 flex items-baseline">
	<span class="mr-2 text-5xl font-extrabold dark:text-white">{value}</span>
	{#if period}
		<span class="text-gray-500 dark:text-gray-400">/{period}</span>
	{/if}
</div>
