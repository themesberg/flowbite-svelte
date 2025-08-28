<script lang="ts">
  import { Radio, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, TableBodyRow, Label } from "flowbite-svelte";
</script>

<Table>
  <TableHead>
    <TableHeadCell>Left column</TableHeadCell>
    <TableHeadCell>Right column</TableHeadCell>
  </TableHead>
  <TableBody class="divide-y dark:divide-gray-700">
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Label for="radio1">Default radio</Label></TableBodyCell>
      <TableBodyCell><Label for="radio2">Disabled radio</Label></TableBodyCell>
    </TableBodyRow>
    <TableBodyRow class="divide-x rtl:divide-x-reverse dark:divide-gray-700">
      <TableBodyCell><Radio name="separate" id="radio1" /></TableBodyCell>
      <TableBodyCell><Radio name="separate" id="radio2" disabled /></TableBodyCell>
    </TableBodyRow>
  </TableBody>
</Table>

<Label color="red" class="mt-4 flex items-center font-bold italic">
  Label on the other side <Radio name="separate" classes={{ label: "ms-2" }} />
</Label>
