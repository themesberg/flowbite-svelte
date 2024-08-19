<Button onclick={dropdownSearch.toggle}
  >Dropdown
  <ChevronDownOutline class="ms-2 h-5 w-5 text-white dark:text-white" />
</Button>
<div class="relative">
  <Dropdown
    dropdownStatus={dropdownSearchStatus}
    closeDropdown={closeDropdownSearch}
    {transitionParams}
    class="absolute top-[40px] -left-[150px] w-52"
  >
  <DropdownHeader>
    <Search size="md" bind:value={searchTerm} class="pl-10"/>
  </DropdownHeader>
    <DropdownUl class="overflow-y-auto p-2 h-24">
      {#each filteredItems as person (person.name)}
        <DropdownLi liClass="rounded p-1 hover:bg-gray-100 dark:hover:bg-gray-600">
          <Checkbox bind:checked={person.checked}>{person.name}</Checkbox>
        </DropdownLi>
      {/each}
    </DropdownUl>
    <DropdownFooter class="flex items-center p-3 -mb-1 text-sm font-medium text-red-600 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
      <UserRemoveSolid class="w-4 h-4 me-2 text-primary-700 dark:text-primary-700" />Delete user
    </DropdownFooter>
  </Dropdown>
</div>