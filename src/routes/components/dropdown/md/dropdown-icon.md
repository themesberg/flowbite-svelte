<DotsVerticalOutline onclick={dropdownIcon.toggle} class="dots-menu dark:text-white" />
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownIconStatus}
    closeDropdown={closeDropdownIcon}
    {transitionParams}
    class="absolute top-[20px] -left-[90px]"
  >
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/drawer">Drawer</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/components">Alert</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>