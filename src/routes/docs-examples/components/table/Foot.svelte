<script lang="ts">
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table border={false}>
  <TableHead class="bg-neutral-secondary-soft text-heading text-xs uppercase">
    <TableHeadCell>Product name</TableHeadCell>
    <TableHeadCell>Qty</TableHeadCell>
    <TableHeadCell>Price</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Apple MacBook Pro 17"</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$2999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Microsoft Surface Pro</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$1999</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Magic Mouse 2</TableBodyCell>
      <TableBodyCell>1</TableBodyCell>
      <TableBodyCell>$99</TableBodyCell>
    </TableBodyRow>
  </TableBody>
  <tfoot>
    <tr class="text-heading font-semibold">
      <th scope="row" class="px-6 py-3 text-base">Total</th>
      <td class="px-6 py-3">3</td>
      <td class="px-6 py-3">21,000</td>
    </tr>
  </tfoot>
</Table>
