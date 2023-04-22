<script lang="ts">
	export let header: Array<string> = ['Name', 'Type', 'Default'];
	export let divClass: string ='w-full relative overflow-x-auto shadow-md sm:rounded-lg py-4'
	export let tableClass: string = 'w-full text-sm text-left text-gray-500 dark:text-gray-400';
	export let theadClass: string =
		'text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400';
	export let thClass: string = 'px-6 py-3';
</script>

<div class={divClass}>
	<table class={tableClass}>
		<thead class={theadClass}>
			<tr>
				{#each header as column}
					<th scope="col" class={thClass}>
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
