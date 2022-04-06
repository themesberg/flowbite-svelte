<script lang="ts">
	export let items: Array<Array<string>>;
</script>

{#each items as item}
	<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
		{#each item as cell, i}
			{#if i === 0}
				<th
					scope="row"
					class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
				>
					{@html cell}
				</th>
			{:else}
				<td class="px-6 py-4">
					{@html cell}
				</td>
			{/if}
		{/each}
	</tr>
{/each}
