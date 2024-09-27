<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, NavHamburger, Dropdown, DropdownHeader, DropdownUl, DropdownLi, DropdownDivider, Avatar, DropdownFooter } from '$lib';
  import { sineIn } from 'svelte/easing';
  import { ChevronDownOutline } from 'flowbite-svelte-icons';
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let dropdownUser = uiHelpers();
  let dropdownUserStatus = $state(false);
  let closeDropdownUser = dropdownUser.close;
  $effect(() => {
    dropdownUserStatus = dropdownUser.isOpen;
    navStatus = nav.isOpen;
  });
</script>

<div class="h-80">
  <Navbar {navStatus} hamburgerMenu={false}>
    {#snippet brand()}
      <NavBrand siteName="Svelte 5 UI Lib">
        <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
      </NavBrand>
    {/snippet}
    {#snippet navSlotBlock()}
      <div class="flex items-center space-x-1 md:order-2">
        <Avatar onclick={dropdownUser.toggle} src="/images/profile-picture-3.webp" dot={{ color: 'green' }} />
        <div class="relative">
          <Dropdown dropdownStatus={dropdownUserStatus} closeDropdown={closeDropdownUser} params={{ y: 0, duration: 200, easing: sineIn }} class="absolute -left-[110px] top-[14px] md:-left-[160px] ">
            <DropdownHeader class="px-4 py-2">
              <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
              <span class="block truncate text-sm font-medium">name@flowbite.com</span>
            </DropdownHeader>
            <DropdownUl>
              <DropdownLi href="/">Dashboard</DropdownLi>
              <DropdownLi href="/components/drawer">Drawer</DropdownLi>
              <DropdownLi href="/components/footer">Footer</DropdownLi>
              <DropdownLi href="/components">Alert</DropdownLi>
            </DropdownUl>
            <DropdownFooter class="px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600">Sign out</DropdownFooter>
          </Dropdown>
        </div>
        <NavHamburger {toggleNav} />
      </div>
    {/snippet}
    <NavUl class="order-1">
      <NavLi href="/">Home</NavLi>
      <NavLi href="/components/navbar">Navbar</NavLi>
      <NavLi href="/components/footer">Footer</NavLi>
    </NavUl>
  </Navbar>
</div>
