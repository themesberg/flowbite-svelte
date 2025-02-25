<script lang="ts">
  import { Button, ButtonGroup, Dropdown, DropdownLi, DropdownUl, Input } from "$lib";
  import { ChevronDownOutline, SearchOutline } from "flowbite-svelte-icons";
</script>

<div class="h-48">
  <ButtonGroup class="w-full">
    <Button class="shrink-0 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800">
      All categories<ChevronDownOutline class="ms-2 h-6 w-6" />
    </Button>
    <Dropdown>
      <DropdownUl>
        <DropdownLi href="?">Shopping</DropdownLi>
        <DropdownLi href="?">Images</DropdownLi>
        <DropdownLi href="?">News</DropdownLi>
        <DropdownLi href="?">Finance</DropdownLi>
      </DropdownUl>
    </Dropdown>
    <Input placeholder="Search" />
    <Button color="primary" class="p-2.5!" type="submit">
      <SearchOutline class="h-5 w-5" />
    </Button>
  </ButtonGroup>
</div>
