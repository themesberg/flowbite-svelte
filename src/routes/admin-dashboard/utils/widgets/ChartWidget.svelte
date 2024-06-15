<script lang="ts">
	import Change from '../dashboard/Change.svelte';
	import type { ApexOptions } from 'apexcharts';
	import { Card, Chart, Heading } from 'flowbite-svelte';
	import LastRange from './LastRange.svelte';
	import More from './More.svelte';

	export let title: string = '';
	export let subtitle: string = '';
	export let chartOptions: ApexOptions;
</script>

<Card size="xl" class="w-full max-w-none 2xl:col-span-2">
	<div class="mb-4 flex items-center justify-between">
		<div class="flex-shrink-0">
			<Heading tag="h3" class="text-2xl">{title}</Heading>
			<p class="text-base font-light text-gray-500 dark:text-gray-400">{subtitle}</p>
		</div>
		<Change value={12.5} since="" class="justify-end font-medium" />
	</div>

	<Chart options={chartOptions}></Chart>
	<div
		class="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 dark:border-gray-700 sm:pt-6"
	>
		<LastRange />
		<More title="Sales Report" href="#top" />
	</div>
</Card>

<!--
@component
[Go to docs](https://flowbite-svelte-admin-dashboard.vercel.app/)
## Props
@prop export let title: string = '';
@prop export let subtitle: string = '';
@prop export let chartOptions: ApexOptions;
-->
