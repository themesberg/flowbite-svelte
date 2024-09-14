<script lang="ts">
  import { slide } from 'svelte/transition';
  import { Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell, ImagePlaceholder } from '$lib';
  const items2 = [
    {
      name: 'Apple MacBook Pro 17"',
      color: 'Sliver',
      type: 'Laptop',
      price: '$2999'
    },
    {
      name: 'Microsoft Surface Pro',
      color: 'White',
      type: 'Laptop PC',
      price: '$1999'
    },
    {
      name: 'Magic Mouse 2',
      color: 'Black',
      type: 'Accessories',
      price: '$99'
    }
  ];

  let openRow = $state();
  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };
  let details;
</script>

<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each items2 as item, i}
      <TableBodyRow onclick={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow ondblclick={() => (details = item)}>
          <TableBodyCell colspan={4} class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: 'y' }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
