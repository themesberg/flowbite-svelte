<TableSearch placeholder="Search by maker name" hoverable={true} bind:inputValue={searchTerm}>
  <TableHead>
    <TableHeadCell>ID</TableHeadCell>
    <TableHeadCell>Maker</TableHeadCell>
    <TableHeadCell>Type</TableHeadCell>
    <TableHeadCell>Make</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    {#each filteredItems as item}
      <TableBodyRow>
        <TableBodyCell>{item.id}</TableBodyCell>
        <TableBodyCell>{item.maker}</TableBodyCell>
        <TableBodyCell>{item.type}</TableBodyCell>
        <TableBodyCell>{item.make}</TableBodyCell>
      </TableBodyRow>
    {/each}
  </TableBody>
</TableSearch>