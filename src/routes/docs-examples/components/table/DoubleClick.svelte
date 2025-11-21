<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell, ImagePlaceholder, Modal } from "flowbite-svelte";
  import { slide } from "svelte/transition";
  type ItemType = {
    name: string;
    color: string;
    type: string;
    price: string;
  };

  const items: ItemType[] = [
    {
      name: 'Apple MacBook Pro 17"',
      color: "Silver",
      type: "Laptop",
      price: "$2999"
    },
    {
      name: "Microsoft Surface Pro",
      color: "White",
      type: "Laptop PC",
      price: "$1999"
    },
    {
      name: "Magic Mouse 2",
      color: "Black",
      type: "Accessories",
      price: "$99"
    }
  ];

  let openRow: number | null | undefined = $state();
  let details: ItemType | undefined = $state();
  let doubleClickModal = $state(false);

  const toggleRow = (i: number) => {
    openRow = openRow === i ? null : i;
  };
</script>

<Table>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    {#each items as item, i}
      <TableBodyRow onclick={() => toggleRow(i)}>
        <TableBodyCell>{item.name}</TableBodyCell>
        <TableBodyCell>{item.color}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.price}</TableBodyCell>
      </TableBodyRow>
      {#if openRow === i}
        <TableBodyRow
          ondblclick={() => {
            doubleClickModal = true;
            details = item;
          }}
        >
          <TableBodyCell colspan={4} class="p-0">
            <div class="px-2 py-3" transition:slide={{ duration: 300, axis: "y" }}>
              <ImagePlaceholder />
            </div>
          </TableBodyCell>
        </TableBodyRow>
      {/if}
    {/each}
  </TableBody>
</Table>
<Modal title={details?.name} bind:open={doubleClickModal} autoclose outsideclose>
  <ImagePlaceholder />
</Modal>
