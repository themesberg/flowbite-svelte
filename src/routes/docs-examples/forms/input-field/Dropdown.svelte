<script lang="ts">
  import { Input, ButtonGroup, Button, Dropdown, DropdownItem } from "flowbite-svelte";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
</script>

<ButtonGroup class="w-full">
  <Button
    color={undefined}
    class="shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
  >
    All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
  </Button>
  <Dropdown simple>
    <DropdownItem>Shopping</DropdownItem>
    <DropdownItem>Images</DropdownItem>
    <DropdownItem>News</DropdownItem>
    <DropdownItem>Finance</DropdownItem>
  </Dropdown>
  <Input placeholder="Search" />
  <Button class="p-2.5!" type="submit">
    <SearchOutline class="h-5 w-5" />
  </Button>
</ButtonGroup>
