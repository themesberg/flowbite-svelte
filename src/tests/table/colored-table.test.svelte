<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<div>
  <Table color="blue" data-testid="colored-table-blue">
    <TableHead>
      <TableHeadCell>Header</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Cell</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Table color="green" data-testid="colored-table-green">
    <TableHead>
      <TableHeadCell>Header</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Cell</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>

  <Table color="red" data-testid="colored-table-red">
    <TableHead>
      <TableHeadCell>Header</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow>
        <TableBodyCell>Cell</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
