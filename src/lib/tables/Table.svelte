<script lang="ts">
	export let header;
	export let products;
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
			{#each products as { name, color, category, price, action }}
				<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
					<th
						scope="row"
						class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
					>
						{name}
					</th>
					<td class="px-6 py-4"> {color} </td>
					<td class="px-6 py-4"> {category} </td>
					<td class="px-6 py-4"> {price} </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
							>{action}</a
						>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
