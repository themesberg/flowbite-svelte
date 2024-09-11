<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Search, Toggle, uiHelpers } from '$lib';
  import { ChevronDownOutline, UserRemoveSolid } from 'flowbite-svelte-icons';
  let dropdownToggle = uiHelpers();
  let dropdownToggleStatus = $state(false);
  let closeDropdownToggle = dropdownToggle.close;
  $effect(() => {
    dropdownToggleStatus = dropdownToggle.isOpen;
  })
</script>

<div class="flex h-72 items-start justify-center">
  <Button onclick={dropdownToggle.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownToggleStatus} closeDropdown={closeDropdownToggle} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto text-sm">
      <DropdownHeader class="px-2 py-2">
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600" checked>Checked state</Toggle>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Toggle class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">Default toggle</Toggle>
        </DropdownLi>
      </DropdownUl>
      <DropdownFooter>
        <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
          <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
        </a>
      </DropdownFooter>
    </Dropdown>
  </div>
</div>