<Button onclick={dropdownB.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownBStatus}
    closeDropdown={closeDropdownB}
    {transitionParams}
    class="absolute top-[40px] -left-[150px]"
  >
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/dropdown">Dropdown</DropdownLi>
    </DropdownUl>
  </Dropdown>
</div>