<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, DropdownHeader, Search, Radio, DropdownFooter } from '$lib';
  import { ChevronDownOutline, UserRemoveSolid } from 'flowbite-svelte-icons';

  let group1 = $state(2);
  let dropdownRadio = uiHelpers();
  let dropdownRadioStatus = $state(false);
  let closeDropdownRadio = dropdownRadio.close;
  $effect(() => {
    dropdownRadioStatus = dropdownRadio.isOpen;
  });
</script>

<div class="flex h-64 items-start justify-center">
  <Button onclick={dropdownRadio.toggle}>Dropdown radio<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownRadioStatus} closeDropdown={closeDropdownRadio} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[185px] top-[45px] w-48 overflow-y-auto pb-3 text-sm">
      <DropdownUl>
        <DropdownHeader class="px-2 py-1">
          <div class="p-0">
            <Search size="md" class="pl-10" />
          </div>
        </DropdownHeader>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
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
