<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table data-testid="colspan-table">
  <TableHead>
    <TableHeadCell>Col 1</TableHeadCell>
    <TableHeadCell>Col 2</TableHeadCell>
    <TableHeadCell>Col 3</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell colspan={3} data-testid="colspan-cell">Spanning 3 columns</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>Cell 1</TableBodyCell>
      <TableBodyCell colspan={2} data-testid="colspan-cell-2">Spanning 2 columns</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
