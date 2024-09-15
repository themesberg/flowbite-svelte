<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Dropdown, DropdownUl, DropdownLi } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  // for navbar
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  // for Dropdown
  let dropdown = uiHelpers();
  let dropdownStatus = $state(false);
  let closeDropdown = dropdown.close;
  $effect(() => {
    navStatus = nav.isOpen;
    dropdownStatus = dropdown.isOpen;
  });
</script>
<div class="h-64">
<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi onclick={dropdown.toggle} class="cursor-pointer">
      Dropdown<ChevronDownOutline class="w-6 h-6 ms-2 text-primary-800 dark:text-white inline" />
    </NavLi>
    <div class="relative">
      <Dropdown {dropdownStatus} {closeDropdown} class="absolute left-[100px] -top-[20px] md:-left-[170px] md:top-[20px]">
        <DropdownUl>
          <DropdownLi href="/components/alert">Alert</DropdownLi>
          <DropdownLi href="/components/button">Button</DropdownLi>
          <DropdownLi href="/components/drawer">Drawer</DropdownLi>
        </DropdownUl>
      </Dropdown>
    </div>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>
</div>