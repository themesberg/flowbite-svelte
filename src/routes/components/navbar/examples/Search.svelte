<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers, Button, Input, Search } from '$lib';
  import { SearchOutline } from 'flowbite-svelte-icons';
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $effect(() => {
    navStatus = nav.isOpen;
  });
</script>

<Navbar {toggleNav} {closeNav} {navStatus}>
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}
  {#snippet navSlotBlock()}
    <div class="relative hidden md:flex">
      <Search size="md" class="pl-10" />
    </div>
    <div class="order-1 block md:hidden">
      <SearchOutline class="h-5 w-5" />
    </div>
  {/snippet}
  {#snippet navSlotHiddenTop()}
    <Search class="mt-4 pl-10" />
  {/snippet}
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>
