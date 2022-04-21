<script lang="ts">
	export let ratings: { label: string; rating: number }[] = [];
	export let ratings2: { label: string; rating: number }[] = [];
	export let headerLabel: { desc1: string; desc2: string; desc3: string; link: { label: string; url: string } };
	export let desc1Class: string = 'bg-blue-100 w-8 text-blue-800 text-sm font-semibold inline-flex items-center p-1.5 rounded dark:bg-blue-200 dark:text-blue-800';
	export let desc2Class: string = 'ml-2 w-24 font-medium text-gray-900 dark:text-white';
	export let desc3spanClass: string = 'mx-2 w-1 h-1 bg-gray-900 rounded-full dark:bg-gray-500';
	export let desc3pClass: string = 'text-sm  w-24 font-medium text-gray-500 dark:text-gray-400';
</script>

<div class="flex items-center mb-5">
	{#if headerLabel.desc1}
		<p class={desc1Class}>{headerLabel.desc1}</p>
	{/if}
	{#if headerLabel.desc2}
		<p class={desc2Class}>{headerLabel.desc2}</p>
	{/if}
	{#if headerLabel.desc3}
		<span class={desc3spanClass} />
		<p class={desc3pClass}>{headerLabel.desc3}</p>
	{/if}
	{#if headerLabel.link}
		<a href={headerLabel.link.url} class="ml-auto w-32 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">{headerLabel.link.label}</a>
	{/if}
</div>
<div class="gap-8 sm:grid sm:grid-cols-2">
	<div>
		{#each ratings as { label, rating }}
			<dl>
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
				<dd class="flex items-center mb-3">
					<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
						<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: {rating * 10}%" />
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
				</dd>
			</dl>
		{/each}
	</div>
	<div>
		{#each ratings2 as { label, rating }}
			<dl>
				<dt class="text-sm font-medium text-gray-500 dark:text-gray-400">{label}</dt>
				<dd class="flex items-center mb-3">
					<div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
						<div class="bg-blue-600 h-2.5 rounded dark:bg-blue-500" style="width: {rating * 10}%" />
					</div>
					<span class="text-sm font-medium text-gray-500 dark:text-gray-400">{rating}</span>
				</dd>
			</dl>
		{/each}
	</div>
</div>
