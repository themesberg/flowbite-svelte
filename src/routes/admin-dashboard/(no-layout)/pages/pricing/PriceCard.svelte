<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import PriceCardListItem from './PriceCardListItem.svelte';
	import PriceCardPrice from './PriceCardPrice.svelte';

	export let title: string;
	export let price: string;
	export let period: string = 'month';
</script>

<Card size="none" class="mx-auto max-w-lg text-gray-900" padding="xl">
	<h3 class="mb-4 text-2xl font-semibold dark:text-white">{title}</h3>
	{#if $$slots.subtitle}
		<p class="font-light text-gray-500 dark:text-gray-400 sm:text-lg">
			<slot name="subtitle" />
		</p>
	{/if}
	<PriceCardPrice value={price} {period} />
	<!-- List -->
	<ul role="list" class="mb-8 space-y-4 text-left">
		<slot Item={PriceCardListItem} />
	</ul>
	<a
		href="#top"
		class="rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 dark:text-white dark:focus:ring-primary-900"
		>Get started</a
	>
</Card>
