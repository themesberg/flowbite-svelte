<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers } from "$lib";
  import { page } from '$app/stores';
  let activeUrl = $state($page.url.pathname);
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $effect(() => {
    navStatus = nav.isOpen;
    activeUrl = $page.url.pathname;
  });
</script>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="md">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl {activeUrl}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>
