<form class="flex">
  <Button class="whitespace-nowrap rounded-e-none border border-e-0 border-primary-700" onclick={dropdown.toggle}>
    {selectCategory}
    <ChevronDownOutline class="ms-2.5 h-2.5 w-2.5" />
  </Button>
  <div class="relative">
    <Dropdown {dropdownStatus} {closeDropdown} {transitionParams} class="absolute -left-[160px] top-[40px]">
      <DropdownUl>
        {#each items as { label }}
          <DropdownLi onclick={() => handleClick(label)} liClass="hover:cursor-pointer py-1 pl-4 {selectCategory === label ? 'underline' : ''}">
            {label}
          </DropdownLi>
        {/each}
      </DropdownUl>
    </Dropdown>
  </div>
  <Search size="md" class="rounded-none py-2.5 pl-8" placeholder="Searching {selectCategory}" />
  <Button class="rounded-s-none !p-2.5">
    <SearchOutline class="h-6 w-6" />
  </Button>
</form>