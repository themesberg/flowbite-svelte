<script lang="ts">
  import { Table, TableHead, TableBody } from '$lib';
  const headItems = ['Name', 'Color', 'Type', 'Price'];
  const bodyItems = [['Apple MacBook Pro 17"', 'Sliver', 'Laptop', '$2999'], ['Microsoft Surface Pro', 'White', 'Laptop PC', '$1999'], ['Magic Mouse 2', 'Black', 'Accessories', '$99'], ['Google Pixel Phone', 'Gray', 'Phone', '$799'], ['Apple Watch 5', 'Red', 'Wearables', '$999']];
</script>

<Table hoverable>
  <TableHead {headItems}/>
  <TableBody {bodyItems}/>
</Table>