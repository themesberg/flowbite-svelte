<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, NavHamburger, Input } from "$lib";
  import { page } from "$app/stores";
  let activeUrl = $state($page.url.pathname);
  import SearchOutline from "flowbite-svelte-icons/SearchOutline.svelte";

  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  $effect(() => {
    navStatus = nav.isOpen;
    activeUrl = $page.url.pathname;
  });
</script>

<Navbar {navStatus} breakPoint="lg" hamburgerMenu={false}>
  {#snippet brand()}
    <NavBrand siteName="Svelte 5 UI Lib">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}
  {#snippet navSlotBlock()}
    <div class="flex items-center space-x-1 md:order-2">
      <Button class="me-1 rounded-lg bg-white p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
        <SearchOutline class="h-5 w-5" />
      </Button>
      <div class="relative hidden md:block">
        <div class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
          <SearchOutline class="h-4 w-4" />
        </div>
        <Input id="search-navbar" class="bg-transparent ps-10" placeholder="Search..." />
      </div>
      <NavHamburger {toggleNav} />
    </div>
  {/snippet}
  <NavUl class="order-1" {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>
