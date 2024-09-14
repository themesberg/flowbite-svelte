<script lang="ts">
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from '$lib';
  const headItems = ['Brand', 'Name', 'Color', 'Type', 'Price'];
  const bodyItems = [['Apple', 'MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'], ['Microsoft', 'Surface Pro', 'White', 'Laptop PC', '$1999'], ['Apple','Magic Mouse 2', 'Black', 'Accessories', '$99'], ['Google', ' Pixel Phone', 'Gray', 'Phone', '$799'], ['Apple', 'Watch 5', 'Red', 'Wearables', '$999']];

</script>

<Table>
  <TableHead {headItems} defaultRow={false}>
    {#snippet headerSlot()}
    <tr>
      <TableHeadCell colspan={2}>Product</TableHeadCell>
      <TableHeadCell colspan={3}>Info</TableHeadCell>
    </tr>
    {/snippet}
  </TableHead>
  <TableBody {bodyItems}/>
</Table>