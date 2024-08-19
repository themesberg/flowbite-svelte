<Button onclick={dropdownDivider.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownDividerStatus}
    closeDropdown={closeDropdownDivider}
    {transitionParams}
    class="absolute top-[40px] -left-[150px]"
  >
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownDivider />
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>