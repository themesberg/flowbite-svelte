<script lang="ts">
  import { Button, Dropdown, DropdownFooter, DropdownLi, DropdownUl, Toggle } from "$lib";
  import { ChevronDownOutline, UserRemoveSolid } from "flowbite-svelte-icons";
</script>

<div class="flex h-72 items-start justify-center">
  <Button>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <Dropdown class="w-48 overflow-y-auto text-sm">
    <DropdownUl>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
      </DropdownLi>
      <DropdownLi liClass="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Toggle class="rounded-sm p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
      </DropdownLi>
    </DropdownUl>
    <DropdownFooter>
      <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
        <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
      </a>
    </DropdownFooter>
  </Dropdown>
</div>
