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
  <div class="hidden md:flex relative">
    <Search size="md" class="pl-10" />
  </div>
  <div class="block md:hidden order-1">
    <SearchOutline class="w-5 h-5" />
  </div>
  {/snippet}
  {#snippet navSlotHiddenTop()}
  <Search class="pl-10 mt-4" />
  {/snippet}
  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>