<script lang="ts">
	export let header;
	export let items;
</script>

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
	<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
		<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
			<tr>
				{#each header as column}
					<th scope="col" class="px-6 py-3">
						{column}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each items as item}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					{#each item as cell, i}
						{#if i === 0}
							<th
								scope="row"
								class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
							>
								{@html cell}
								{i}
							</th>
						{:else}
							<td class="px-6 py-4">
								{@html cell}
							</td>
						{/if}
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</div>
