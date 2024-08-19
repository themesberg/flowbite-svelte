<Button onclick={dropdownHelper.toggle}
  >Dropdown helper text<ChevronDownOutline
    class="ms-2 h-6 w-6 text-white dark:text-white"
  /></Button
>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownHelperStatus}
    closeDropdown={closeDropdownHelper}
    {transitionParams}
    class="w-64 overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[240px]"
  >
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