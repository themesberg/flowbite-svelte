<script lang="ts">
	import { twMerge } from 'tailwind-merge';
	interface Props {
		rating?: any;
		globalText?: any;
		ratings: { label: string; rating: number }[];
		divclass?: string;
		spanclass?: string;
		div2class?: string;
		div3class?: string;
		span2class?: string;
		unit?: string;
	}
	let { rating, globalText, ratings, divclass, spanclass, div2class, div3class, span2class, unit } =
		$props<Props>();
	let divCls: string = twMerge('flex items-center mt-4', divclass);
	let spanCls: string = twMerge('text-sm font-medium text-gray-600 dark:text-gray-500', spanclass);
	let div2Cls: string = twMerge('mx-4 w-2/4 h-5 bg-gray-200 rounded dark:bg-gray-700', div2class);
	let div3Cls: string = twMerge('h-5 bg-yellow-400 rounded', div3class);
	let span2Cls: string = twMerge(
		'text-sm font-medium text-gray-600 dark:text-gray-500',
		span2class
	);
</script>

{#if rating}
	{@render rating()}
{/if}
{#if globalText}
	{@render globalText()}
{/if}
{#each ratings as { label, rating }}
	<div class={divCls}>
		<span class={spanCls}>{label}</span>
		<div class={div2Cls}>
			<div class={div3Cls} style="width: {rating}%" />
		</div>
		<span class={span2Cls}>{rating}{unit}</span>
	</div>
{/each}
