<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<Button>Dropdown button<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem class="flex items-center justify-between" classes={{ anchor: "flex" }}>
    Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
  </DropdownItem>
  <Dropdown simple placement="right-start">
    <DropdownItem>Overview</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
