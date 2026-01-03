<script lang="ts">
  import TableSearch from "$lib/table/TableSearch.svelte";
  import TableHead from "$lib/table/TableHead.svelte";
  import TableHeadCell from "$lib/table/TableHeadCell.svelte";
  import TableBody from "$lib/table/TableBody.svelte";
  import TableBodyRow from "$lib/table/TableBodyRow.svelte";
  import TableBodyCell from "$lib/table/TableBodyCell.svelte";

  let searchValue = $state("");
</script>

<div data-testid="table-search-wrapper">
  <TableSearch bind:inputValue={searchValue}>
    <TableHead>
      <TableHeadCell>Name</TableHeadCell>
      <TableHeadCell>Category</TableHeadCell>
    </TableHead>
    <TableBody>
      <TableBodyRow data-testid="search-row-1">
        <TableBodyCell>Product A</TableBodyCell>
        <TableBodyCell>Type 1</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow data-testid="search-row-2">
        <TableBodyCell>Product B</TableBodyCell>
        <TableBodyCell>Type 2</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </TableSearch>
</div>
