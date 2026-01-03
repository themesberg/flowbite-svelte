<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table shadow data-testid="shadow-table">
  <TableHead>
    <TableHeadCell>Title</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Entry</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
