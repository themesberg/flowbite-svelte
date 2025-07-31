<script lang="ts">
  import { Button, Dropdown, DropdownItem, P } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronRightOutline } from "flowbite-svelte-icons";
  let isOpen = $state(false);
</script>

<P>Current dropdown state: {isOpen ? "Open" : "Closed"}</P>
<Button onclick={() => (isOpen = false)}>Close Btn</Button>

<Button onclick={() => (isOpen = true)}>
  Dropdown<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
</Button>

<Dropdown bind:isOpen simple>
  <DropdownItem onclick={() => (isOpen = false)}>Dashboard (close)</DropdownItem>
  <DropdownItem class="flex items-center justify-between">
    Dropdown<ChevronRightOutline class="text-primary-700 ms-2 h-6 w-6 dark:text-white" />
  </DropdownItem>
  <Dropdown simple placement="right-start">
    <DropdownItem onclick={() => (isOpen = false)}>Overview (close)</DropdownItem>
    <DropdownItem>My downloads</DropdownItem>
    <DropdownItem>Billing</DropdownItem>
  </Dropdown>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>
