<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger, Input } from '$lib';
  import SearchOutline from 'flowbite-svelte-icons/SearchOutline.svelte'

  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  $effect(() => {
    navStatus = nav.isOpen;
  });
</script>

<Navbar {navStatus} breakPoint="lg" hamburgerMenu={false}>
  {#snippet brand()}
    <NavBrand siteName="Svelte 5 UI Lib">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}
  {#snippet navSlotBlock()}
  <div class="flex items-center md:order-2 space-x-1">
    <Button class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1 bg-white">
      <SearchOutline class="w-5 h-5" />
    </Button>
    <div class="hidden relative md:block">
      <div class="flex absolute inset-y-0 start-0 items-center ps-3 pointer-events-none">
        <SearchOutline class="w-4 h-4" />
      </div>
      <Input id="search-navbar" class="ps-10 bg-transparent" placeholder="Search..." />
    </div>
    <NavHamburger {toggleNav}/>
  </div>
  {/snippet}
  <NavUl class="order-1">
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>
