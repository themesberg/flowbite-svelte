<script>
  import { Button, Dropdown, DropdownItem, Checkbox, Helper } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple class="w-60 space-y-1 p-3 text-sm">
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Enable notifications</Checkbox>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox checked>Enable 2FA auth</Checkbox>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
  <li class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
    <Checkbox>Subscribe newsletter</Checkbox>
    <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
  </li>
</Dropdown>