<Button onclick={dropdownRadio.toggle}
  >Dropdown radio<ChevronDownOutline
    class="ms-2 h-6 w-6 text-white dark:text-white"
  /></Button
>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownRadioStatus}
    closeDropdown={closeDropdownRadio}
    {transitionParams}
    class="overflow-y-auto p-2 pb-3 text-sm absolute top-[40px] -left-[170px]"
  >
    <DropdownUl>
      <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group1" bind:group={group1} value={1}>Default radio</Radio>
      </DropdownLi>
      <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group1" bind:group={group1} value={2}>Checked state</Radio>
      </DropdownLi>
      <DropdownLi liClass="rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
        <Radio name="group1" bind:group={group1} value={3}>Default radio</Radio>
      </DropdownLi>
    </DropdownUl>
    {#snippet header()}
      <div class="p-0">
        <Search size="md" class="pl-8" />
      </div>
    {/snippet}
    {#snippet footer()}
      <a
        href="/"
        class="-mb-1 flex items-center bg-gray-50 p-3 text-sm font-medium text-red-600 hover:bg-gray-100 hover:underline dark:bg-gray-700 dark:text-red-500 dark:hover:bg-gray-600"
      >
        <UserRemoveSolid class="me-1 h-5 w-5" />Delete user
      </a>
    {/snippet}
  </Dropdown>
</div>