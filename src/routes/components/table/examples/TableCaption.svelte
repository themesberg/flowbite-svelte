<script lang="ts">
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from '$lib';
  const headItems = ['Brand', 'Name', 'Color', 'Type', 'Price'];
  const bodyItems = [['Apple', 'MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'], ['Microsoft', 'Surface Pro', 'White', 'Laptop PC', '$1999'], ['Apple','Magic Mouse 2', 'Black', 'Accessories', '$99'], ['Google', ' Pixel Phone', 'Gray', 'Phone', '$799'], ['Apple', 'Watch 5', 'Red', 'Wearables', '$999']];
</script>

<Table>
  {#snippet captionSlot()}
    <caption class="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
      Our products
      <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
    </caption>
    {/snippet}
  <TableHead {headItems}/>
  <TableBody {bodyItems}/>
</Table>