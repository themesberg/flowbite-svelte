<script lang="ts">
  import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow } from "flowbite-svelte";
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-default divide-y">
    <TableBodyRow class="divide-default divide-x rtl:divide-x-reverse">
      <TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
      <TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-default divide-x rtl:divide-x-reverse">
      <TableBodyCell><Checkbox id="checkbox1" checked /></TableBodyCell>
      <TableBodyCell><Checkbox id="checkbox2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Checkbox classes={{ label: "ms-2" }} />
</Label>
