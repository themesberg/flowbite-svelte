<Button onclick={dropdownCheckbox.toggle}
  >Dropdown checkbox<ChevronDownOutline
    class="ms-2 h-6 w-6 text-white dark:text-white"
  /></Button
>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownCheckboxStatus}
    closeDropdown={closeDropdownCheckbox}
    {transitionParams}
    class="overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[200px]"
  >
    <DropdownHeader>
      <div class="p-0">
        <Search size="md" class="pl-8" />
      </div>
    </DropdownHeader>
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
    <DropdownFooter>
      <a
        href="/"
        class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
      >
        <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
      </a>
    </DropdownFooter>
  </Dropdown>
</div>