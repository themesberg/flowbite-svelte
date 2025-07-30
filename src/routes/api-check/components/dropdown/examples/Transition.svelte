<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import { scale, blur } from "svelte/transition";
</script>

<Button>Scale<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple transition={scale} transitionParams={{ duration: 800 }}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>

<Button>Blur<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<Dropdown simple transition={blur} transitionParams={{ duration: 800 }}>
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>