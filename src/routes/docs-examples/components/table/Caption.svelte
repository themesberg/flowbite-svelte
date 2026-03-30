<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table>
  <caption class="bg-neutral-primary-soft text-heading p-5 text-left text-lg font-semibold">
    Our products
    <p class="text-body mt-1 text-sm font-normal">Browse a list of Flowbite products designed to help you work and play, stay organized, get answers, keep in touch, grow your business, and more.</p>
  </caption>
  <TableHead>
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Color</TableHeadCell>
    <TableHeadCell>Category</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
    <TableHeadCell>
      <span class="sr-only">Edit</span>
    </TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>Silver</TableBodyCell>
      <TableBodyCell>Laptop</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-fg-brand font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>White</TableBodyCell>
      <TableBodyCell>Laptop PC</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-fg-brand font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>Black</TableBodyCell>
      <TableBodyCell>Accessories</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
      <TableBodyCell>
        <a href="/tables" class="text-fg-brand font-medium hover:underline">Edit</a>
      </TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
