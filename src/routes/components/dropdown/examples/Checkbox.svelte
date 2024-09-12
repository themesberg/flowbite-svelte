<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, Checkbox } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let dropdownCheckbox = uiHelpers();
  let dropdownCheckboxStatus = $state(false);
  let closeDropdownCheckbox = dropdownCheckbox.close;
  $effect(() => {
    dropdownCheckboxStatus = dropdownCheckbox.isOpen;
  });
</script>

<div class="flex h-72 items-start justify-center">
  <Button onclick={dropdownCheckbox.toggle}>Dropdown checkbox<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownCheckboxStatus} closeDropdown={closeDropdownCheckbox} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[195px] top-[45px]">
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Bonnie Green</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Bonnie Green</Checkbox>
        </DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
