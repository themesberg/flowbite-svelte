<Button onclick={dropdown.toggle}>Project users<ChevronDownOutline class="ms-2 h-6 w-6 text-white dark:text-white" /></Button>
<div class="relative">
  <Dropdown {dropdownStatus} {closeDropdown} params={transitionParams} class="absolute -left-[170px] top-[40px] overflow-y-auto p-2 pb-3 text-sm">
    <div class="relative">
      <DropdownHeader>
        <div class="p-0">
          <Search size="md" class="pl-8" />
        </div>
      </DropdownHeader>
      <DropdownUl>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox checked>Bonnie Green</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Jese Leos</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Robert Gouth</Checkbox>
        </li>
        <li class="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox>Bonnie Green</Checkbox>
        </li>
      </DropdownUl>
    </div>
    <DropdownFooter>
      <a href="/" class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600">
        <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
      </a>
    </DropdownFooter>
  </Dropdown>
</div>