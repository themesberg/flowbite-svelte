<script>
  import { Button, Dropdown, DropdownItem, Checkbox } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple class="w-44 space-y-3 p-3 text-sm">
  <li>
    <Checkbox>Default checkbox</Checkbox>
  </li>
  <li>
    <Checkbox checked>Checked state</Checkbox>
  </li>
  <li>
    <Checkbox>Default checkbox</Checkbox>
  </li>
</Dropdown>
