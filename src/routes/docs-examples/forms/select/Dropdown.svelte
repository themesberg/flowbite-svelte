<script lang="ts">
  import { Select, Button, ButtonGroup, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "$icons/Usa.svelte";
  import Germany from "$icons/Germany.svelte";
  import Italy from "$icons/Italy.svelte";
  import China from "$icons/China.svelte";

  let states = [
    { value: "CA", name: "California" },
    { value: "TX", name: "Texas" },
    { value: "WH", name: "Washinghton" },
    { value: "FL", name: "Florida" },
    { value: "VG", name: "Virginia" },
    { value: "GE", name: "Georgia" },
    { value: "MI", name: "Michigan" }
  ];
</script>

<ButtonGroup class="w-full">
  <Button class="bg-neutral-secondary-medium text-body hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-neutral-tertiary">
    <Usa />
    USA
    <ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
    <DropdownItem class="flex items-center">
      <Usa />
      United States
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Germany />
      Germany
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <Italy />
      Italy
    </DropdownItem>
    <DropdownItem class="flex items-center">
      <China />
      China
    </DropdownItem>
  </Dropdown>
  <Select items={states} placeholder="Choose the state" />
</ButtonGroup>
