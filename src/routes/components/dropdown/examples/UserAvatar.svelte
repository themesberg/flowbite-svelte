<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Dropdown, DropdownUl, DropdownLi, DropdownHeader, DropdownFooter, Avatar, uiHelpers } from '$lib';
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = $state(false);
  let closeDropdownUser = dropdownUser.close;
  $effect(() => {
    dropdownUserStatus = dropdownUser.isOpen;
  });
</script>

<div class="flex h-72 items-start justify-center">
  <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: 'green' }} />

  <div class="relative">
    <Dropdown dropdownStatus={dropdownUserStatus} closeDropdown={closeDropdownUser} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[110px] top-[40px]">
      <DropdownHeader class="px-4 py-2">
        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
        <span class="block truncate text-sm font-medium">name@flowbite.com</span>
      </DropdownHeader>
      <DropdownUl>
        <DropdownLi href="/">Dashboard</DropdownLi>
        <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        <DropdownLi href="/components/footer">Footer</DropdownLi>
        <DropdownLi href="/components">Alert</DropdownLi>
      </DropdownUl>
      <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>
    </Dropdown>
  </div>
</div>
