<Button onclick={dropdownScroll.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownScrollStatus}
    closeDropdown={closeDropdownScroll}
    {transitionParams}
    class="absolute top-[40px] -left-[150px]"
  >
    <DropdownUl class="overflow-y-auto py-1 h-40 w-52">
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Jese Leos</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Robert Gouth</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-1.webp" size="xs" />Robert Wall</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-2.webp" size="xs" />Joseph Mcfall</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Leslie Livingston</DropdownLi>
      <DropdownLi href="/" aClass="flex items-center text-base font-semibold gap-2"><Avatar src="/images/profile-picture-3.webp" size="xs" />Bonnie Green</DropdownLi>
    </DropdownUl>
    <DropdownFooter class="py-1 overflow-hidden rounded-b-lg">
    <a href="/" class="flex items-center px-3 py-2 -mb-1 text-sm font-medium text-primary-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-primary-500 hover:underline">
      <ChevronDownOutline class="w-6 h-6 ms-2 text-white dark:text-white" />Add new user
    </a>
    </DropdownFooter>
  </Dropdown>
</div>