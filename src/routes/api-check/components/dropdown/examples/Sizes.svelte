<script>
  import { Button, Dropdown, DropdownItem, DropdownHeader, DropdownGroup } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Dropdown triggeredBy=".sizes">
  <DropdownGroup>
    <DropdownItem>Dashboard</DropdownItem>
    <DropdownItem>Settings</DropdownItem>
    <DropdownItem>Earnings</DropdownItem>
  </DropdownGroup>
  <DropdownHeader>Sign out</DropdownHeader>
</Dropdown>
<Button class="sizes" size="sm">
  Small dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
</Button>
<Button class="sizes" size="lg">
  Large dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
</Button>