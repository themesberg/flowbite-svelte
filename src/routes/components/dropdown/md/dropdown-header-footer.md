<Button onclick={dropdownC.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownCStatus}
    closeDropdown={closeDropdownC}
    {transitionParams}
    class="absolute top-[40px] -left-[150px]"
  >
    <DropdownHeader>
      <div>Bonnie Green</div>
      <div class="truncate font-medium">name@flowbite.com</div>
    </DropdownHeader>
    <DropdownUl>
      <DropdownLi href="/">Dashboard</DropdownLi>
      <DropdownLi href="/components/dropdown">Dropdown</DropdownLi>
      <DropdownLi href="/components/footer">Footer</DropdownLi>
      <DropdownLi href="/dropdown">Dropdown</DropdownLi>
    </DropdownUl>
    <DropdownFooter>
      <div class="py-2">
        <a
          href="/"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
          >Sign out</a
        >
      </div>
    </DropdownFooter>
  </Dropdown>
</div>