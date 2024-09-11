<script lang="ts">
  import { sineIn } from 'svelte/easing';
  import { Dropdown, DropdownUl, DropdownLi, DropdownDivider, uiHelpers, Navbar, NavBrand, NavUl, NavLi } from '$lib';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  let dropdownNav = uiHelpers();
  let dropdownNavStatus = $state(false);
  let closeDropdownNav = dropdownNav.close;
  $effect(() => {
    dropdownNavStatus = dropdownNav.isOpen;
    navStatus = nav.isOpen;
  })
</script>

<div class="h-72">
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
          Dropdown<ChevronDownOutline class="ms-2 inline h-6 w-6 text-primary-800 dark:text-white" />
        </NavLi>
        <Dropdown dropdownStatus={dropdownNavStatus} closeDropdown={closeDropdownNav} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -top-[20px] left-[120px] md:-left-[20px] md:top-[20px]">
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
</div>