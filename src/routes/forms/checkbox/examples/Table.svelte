<script lang="ts">
  import { Checkbox, Label, Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell } from '$lib';
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
      <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
      <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>
