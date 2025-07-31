<script>
  import { Kbd, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow } from "flowbite-svelte";
  import { CaretUpSolid, CaretDownSolid, CaretRightSolid, CaretLeftSolid } from "flowbite-svelte-icons";
</script>

<Table>
  <TableHead>
    <TableHeadCell>Key</TableHeadCell>
    <TableHeadCell>Description</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y">
    <TableBodyRow>
      <TableBodyCell>
        <Kbd>Shift</Kbd> or <Kbd>Tab</Kbd>
      </TableBodyCell>
      <TableBodyCell>Navigate to interactive elements</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd>Enter</Kbd> or <Kbd class="px-4 py-1.5">Space bar</Kbd>
      </TableBodyCell>
      <TableBodyCell>Ensure elements with ARIA role="button" can be activated with both key commands.</TableBodyCell>
    </TableBodyRow>
    <TableBodyRow>
      <TableBodyCell>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretUpSolid />
          <span class="sr-only">Arrow key up</span>
        </Kbd>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretDownSolid />
          <span class="sr-only">Arrow key down</span>
        </Kbd> or
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretLeftSolid />
          <span class="sr-only">Arrow key left</span>
        </Kbd>
        <Kbd class="me-1 inline-flex items-center px-2 py-1.5">
          <CaretRightSolid />
          <span class="sr-only">Arrow key right</span>
        </Kbd>
      </TableBodyCell>
      <TableBodyCell>Choose and activate previous/next tab.</TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>