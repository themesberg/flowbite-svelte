<script lang="ts">
	export let progress = '45';
	export let size = 'h-2.5';
	export let labelInside: boolean = false;
	export let labelOutside: string = '';
	export let color = 'blue';
	let barColor;
	if (color === 'blue') {
		barColor = 'bg-blue-600';
	} else if (color === 'gray') {
		barColor = 'bg-gray-600';
	} else if (color === 'red') {
		barColor = 'bg-red-600';
	} else if (color === 'green') {
		barColor = 'bg-green-600';
	} else if (color === 'yellow') {
		barColor = 'bg-yellow-600';
	} else if (color === 'purple') {
		barColor = 'bg-purple-600';
	} else if (color === 'indigo') {
		barColor = 'bg-indigo-600';
	} else {
		barColor = 'bg-blue-600';
	}
</script>

{#if labelOutside}
	<div class="flex justify-between mb-1">
		<span class="text-base font-medium text-blue-700 dark:text-white">{labelOutside}</span>
		<span class="text-sm font-medium text-blue-700 dark:text-white">{progress}%</span>
	</div>
{/if}
<div class="w-full bg-gray-200 rounded-full {size} dark:bg-gray-700">
	{#if labelInside}
		<div
			class="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
			style="width: {progress}%"
		>
			{progress}%
		</div>
	{:else}
		<div class="{barColor} {size} rounded-full" style="width: {progress}%" />
	{/if}
</div>
