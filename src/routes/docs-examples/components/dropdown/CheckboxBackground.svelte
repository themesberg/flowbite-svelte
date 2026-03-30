<script lang="ts">
  import { Button, Dropdown, Checkbox } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white" /></Button>
<Dropdown simple class="w-48 space-y-1 p-3 text-sm">
  <li class="hover:bg-neutral-tertiary-medium rounded-sm p-2">
    <Checkbox>Default checkbox</Checkbox>
  </li>
  <li class="hover:bg-neutral-tertiary-medium rounded-sm p-2">
    <Checkbox checked>Checked state</Checkbox>
  </li>
  <li class="hover:bg-neutral-tertiary-medium rounded-sm p-2">
    <Checkbox>Default checkbox</Checkbox>
  </li>
</Dropdown>
