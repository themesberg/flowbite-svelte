<script lang="ts">
  import { Dropdown, DropdownItem, Navbar, NavBrand, NavHamburger, NavUl, NavLi } from "flowbite-svelte";
  import { ChevronDownOutline } from "flowbite-svelte-icons";
</script>

<Navbar>
  <NavBrand href="/">
    <img src="/images/flowbite-svelte-icon-logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    <span class="text-heading self-center text-xl font-semibold whitespace-nowrap">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl class="ms-3 pt-1">
    <NavLi href="/">Home</NavLi>
    <NavLi class="cursor-pointer">
      Dropdown<ChevronDownOutline class="text-fg-brand ms-2 inline h-6 w-6" />
    </NavLi>
    <Dropdown simple>
      <DropdownItem>Dashboard</DropdownItem>
      <DropdownItem>Settings</DropdownItem>
      <DropdownItem>Earnings</DropdownItem>
      <DropdownItem>Sign out</DropdownItem>
    </Dropdown>
    <NavLi href="#">Services</NavLi>
    <NavLi href="#">Pricing</NavLi>
    <NavLi href="#">Contact</NavLi>
  </NavUl>
</Navbar>
