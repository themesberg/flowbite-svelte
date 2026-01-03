<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table striped data-testid="striped-table">
  <TableHead>
    <TableHeadCell>Column 1</TableHeadCell>
    <TableHeadCell>Column 2</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow data-testid="row-1">
      <TableBodyCell>Data 1</TableBodyCell>
      <TableBodyCell>Data 2</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow data-testid="row-2">
      <TableBodyCell>Data 3</TableBodyCell>
      <TableBodyCell>Data 4</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow data-testid="row-3">
      <TableBodyCell>Data 5</TableBodyCell>
      <TableBodyCell>Data 6</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
