<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table hoverable data-testid="hoverable-table">
  <TableHead>
    <TableHeadCell>Header A</TableHeadCell>
    <TableHeadCell>Header B</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow data-testid="hoverable-row">
      <TableBodyCell>Value A</TableBodyCell>
      <TableBodyCell>Value B</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
