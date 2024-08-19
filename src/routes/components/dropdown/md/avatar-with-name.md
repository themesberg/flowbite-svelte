<Button onclick={dropdownAvatar.toggle} pill color="light" class="!p-1">
  <Avatar src="/images/profile-picture-3.webp" class="me-2" />
  Bonnie Green
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownAvatarStatus}
    closeDropdown={closeDropdownAvatar}
    {transitionParams}
    class="absolute top-[50px] -left-[160px]"
  >
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
    <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">
      Sign out
    </DropdownFooter>
  </Dropdown>
</div>