<script>
  import { Button, Dropdown, DropdownItem, DropdownDivider, DropdownGroup, DropdownHeader } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown>
  <DropdownHeader>
    <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
    <span class="block truncate text-sm font-medium">name@flowbite.com</span>
  </DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
    <DropdownItem>Sign out</DropdownItem>
  </DropdownGroup>
</Dropdown>