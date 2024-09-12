<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Button, Dropdown, DropdownUl, DropdownLi, uiHelpers, Checkbox, Helper } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let dropdownHelper = uiHelpers();
  let dropdownHelperStatus = $state(false);
  let closeDropdownHelper = dropdownHelper.close;
  $effect(() => {
    dropdownHelperStatus = dropdownHelper.isOpen;
  });
</script>

<div class="relative flex h-72 items-start justify-center">
  <Button onclick={dropdownHelper.toggle}>Dropdown helper text<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
  <div class="relative">
    <Dropdown dropdownStatus={dropdownHelperStatus} closeDropdown={closeDropdownHelper} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[240px] top-[45px] w-64 overflow-y-auto p-2 pb-3 text-sm">
      <DropdownUl>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Enable notifications</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Enable 2FA auth</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
        <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Subscribe newsletter</Checkbox>
          <Helper class="ps-6">Some helpful instruction goes over here.</Helper>
        </DropdownLi>
      </DropdownUl>
    </Dropdown>
  </div>
</div>
