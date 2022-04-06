<script lang="ts">
	export let header: Array<string>;

	export let divClass = 'relative overflow-x-auto shadow-md sm:rounded-lg';
	export let tableClass = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
	export let theadClass =
		'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
</script>

<div class={divClass}>
	<table class={tableClass}>
		<thead class={theadClass}>
			<tr>
				{#each header as column}
					<th scope="col" class="px-6 py-3">
						{column}
					</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			<slot />
		</tbody>
	</table>
</div>
