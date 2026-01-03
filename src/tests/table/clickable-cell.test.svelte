<script lang="ts" module>
  export const testState = {
    clickCount: 0,
    lastClickedCell: ""
  };
</script>

<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";

  function handleCellClick(cellName: string) {
    testState.clickCount++;
    testState.lastClickedCell = cellName;
  }
</script>

<Table data-testid="clickable-table">
  <TableHead>
    <TableHeadCell>Action</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell onclick={() => handleCellClick("cell1")} data-testid="clickable-cell-1">Click me 1</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell onclick={() => handleCellClick("cell2")} data-testid="clickable-cell-2">Click me 2</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
