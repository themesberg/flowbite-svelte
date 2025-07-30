<script>
  import { Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, ChevronUpOutline } from "flowbite-svelte-icons";
  let placement = $state("left");
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div onmousedown={(e) => (placement = e.target.dataset.placement)}>
  <Button data-placement="left-start">
    Left start<ChevronUpOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
  <Button data-placement="right-end">
    Right end<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" />
  </Button>
</div>

<Dropdown simple {placement} triggeredBy="[data-placement]">
  <DropdownItem>Dashboard</DropdownItem>
  <DropdownItem>Settings</DropdownItem>
  <DropdownItem>Earnings</DropdownItem>
  <DropdownItem>Sign out</DropdownItem>
</Dropdown>