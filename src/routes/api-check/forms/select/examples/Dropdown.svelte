<script>
  import { Select, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
  import Usa from "../../../../utils/icons/Usa.svelte";
  import Germany from "../../../../utils/icons/Germany.svelte";
  import Italy from "../../../../utils/icons/Italy.svelte";
  import China from "../../../../utils/icons/China.svelte";
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
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

<div class="flex">
  <button id="states-button" class="z-10 inline-flex shrink-0 items-center rounded-s-lg border border-gray-300 bg-gray-100 px-4 py-1.5 text-center text-sm font-medium text-gray-500 hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 focus:outline-hidden dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-700" type="button">
    <Usa />
    USA
    <ChevronDownOutline class="ms-2 h-6 w-6" />
  </button>
  <Dropdown simple triggeredBy="#states-button">
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
  <Select items={states} placeholder="Choose the state" selectClass="rounded-s-none!" class="w-full" />
</div>