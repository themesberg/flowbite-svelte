<script>
  import { Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from "flowbite-svelte";
</script>

<Table border={false}>
  <TableHead class="bg-gray-100 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
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
    <tr class="font-semibold text-gray-900 dark:text-white">
      <th scope="row" class="px-6 py-3 text-base">Total</th>
      <td class="px-6 py-3">3</td>
      <td class="px-6 py-3">21,000</td>
    </tr>
  </tfoot>
</Table>