<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table data-testid="basic-table">
  <TableHead>
    <TableHeadCell data-testid="header-cell-1">Product</TableHeadCell>
    <TableHeadCell data-testid="header-cell-2">Category</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow data-testid="body-row-1">
      <TableBodyCell data-testid="body-cell-1">Item 1</TableBodyCell>
      <TableBodyCell data-testid="body-cell-2">Category A</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
