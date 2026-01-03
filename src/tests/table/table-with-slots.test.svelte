<script lang="ts">
  import Table from "$lib/table/Table.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";
</script>

<Table data-testid="table-with-caption">
  {#snippet captionSlot()}
    <caption data-testid="table-caption">This is a caption</caption>
  {/snippet}
  
  <TableHead>
    <TableHeadCell>Column</TableHeadCell>
  </TableHead>
  <TableBody>
    <TableBodyRow>
      <TableBodyCell>Data</TableBodyCell>
    </TableBodyRow>
  </TableBody>
  
  {#snippet footerSlot()}
    <tfoot data-testid="table-footer">
      <tr>
        <td>Footer content</td>
      </tr>
    </tfoot>
  {/snippet}
</Table>
