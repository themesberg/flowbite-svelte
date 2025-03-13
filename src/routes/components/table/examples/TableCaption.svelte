<script lang="ts">
	import { Table, TableHead, TableBody } from '$lib';
	const headItems = ['Brand', 'Name', 'Color', 'Type', 'Price'];
	const bodyItems = [
		['Apple', 'MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'],
		['Microsoft', 'Surface Pro', 'White', 'Laptop PC', '$1999'],
		['Apple', 'Magic Mouse 2', 'Black', 'Accessories', '$99'],
		['Google', ' Pixel Phone', 'Gray', 'Phone', '$799'],
		['Apple', 'Watch 5', 'Red', 'Wearables', '$999']
	];
</script>

<Table>
	{#snippet captionSlot()}
		<caption
			class="bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white"
		>
			Our products
			<p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
				Browse a list of Flowbite products designed to help you work and play, stay organized, get
				answers, keep in touch, grow your business, and more.
			</p>
		</caption>
	{/snippet}
	<TableHead {headItems} />
	<TableBody {bodyItems} />
</Table>
