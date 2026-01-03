<script lang="ts">
  import TableSearch from "$lib/table/TableSearch.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";

  let searchValue = $state("");
</script>

<div data-testid="styled-table-search-wrapper">
  <TableSearch 
    bind:inputValue={searchValue}
    placeholder="Find items..." 
    striped 
    hoverable
    color="blue"
  >
    <TableHead>
      <TableHeadCell>Item</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow data-testid="styled-row">
        <TableBodyCell>Data</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </TableSearch>
</div>
