<script lang="ts">
	import { Card, Heading } from 'flowbite-svelte';
	export let title: string;
	export let subtitle: string = '';

	let clazz: string = '';
	export { clazz as class };
</script>

<Card size="xl" class="shadow-sm {clazz}">
	<div class="mb-4 mt-px lg:mb-0">
		<Heading tag="h3" class="-ml-0.25 mb-2 text-xl font-semibold dark:text-white">
			{title}
		</Heading>
		{#if subtitle}
			<span class="text-base font-normal text-gray-500 dark:text-gray-400">
				{subtitle}
			</span>
		{/if}
	</div>
	<slot />
</Card>
