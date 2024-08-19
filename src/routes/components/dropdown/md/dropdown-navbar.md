<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <div class="relative">
      <NavLi onclick={dropdownNav.toggle} class="cursor-pointer">
        Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
      </NavLi>
      <Dropdown
        dropdownStatus={dropdownNavStatus}
        closeDropdown={closeDropdownNav}
        {transitionParams}
        class="absolute -top-[20px] left-[120px] md:top-[20px] md:-left-[20px]"
      >
        <DropdownUl class="p-2">
          <DropdownLi href="/">Home</DropdownLi>
          <DropdownDivider />
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
          <DropdownLi href="/components/footer">Footer</DropdownLi>
          <DropdownLi href="/components/alert">Alert</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>