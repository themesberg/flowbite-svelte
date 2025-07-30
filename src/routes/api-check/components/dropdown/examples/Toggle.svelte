<script>
  import { Button, Dropdown, DropdownItem, Toggle } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown toggle<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple class="w-56 space-y-1 p-3">
  <li>
    <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
  </li>
  <li>
    <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
  </li>
  <li>
    <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
  </li>
</Dropdown>
