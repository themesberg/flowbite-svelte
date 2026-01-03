<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table border={false} data-testid="borderless-table">
  <TableHead>
    <TableHeadCell>Column</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow data-testid="borderless-row">
      <TableBodyCell>Content</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
