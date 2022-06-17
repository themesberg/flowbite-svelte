<script lang="ts">
	export let items: Array<Array<string>>;
	export let html: boolean = false;
	export let rowState: 'striped' | 'hover' | undefined = undefined;
	let trClass: string;
	let trLastClass: string;
	if (rowState === 'striped') {
		trClass =
			'border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700';
		trLastClass = 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700';
	} else if (rowState === 'hover') {
		trClass =
			'bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600';
		trLastClass = 'bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600';
	} else {
		trClass = 'bg-white border-b dark:bg-gray-800 dark:border-gray-700';
		trLastClass = 'bg-white dark:bg-gray-800';
	}
</script>

{#each items as item, i}
	{#if i === items.length - 1}
		<tr class={trLastClass}>
			{#each item as cell, j}
				{#if j === 0}
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
					>
						{#if html}
							{@html cell}
						{:else}
							{cell}
						{/if}
					</th>
				{:else}
					<td class="px-6 py-4">
						{#if html}
							{@html cell}
						{:else}
							{cell}
						{/if}
					</td>
				{/if}
			{/each}
		</tr>
	{:else}
		<tr class={trClass}>
			{#each item as cell, j}
				{#if j === 0}
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
					>
						{#if html}
							{@html cell}
						{:else}
							{cell}
						{/if}
					</th>
				{:else}
					<td class="px-6 py-4">
						{#if html}
							{@html cell}
						{:else}
							{cell}
						{/if}
					</td>
				{/if}
			{/each}
		</tr>
	{/if}
{/each}
