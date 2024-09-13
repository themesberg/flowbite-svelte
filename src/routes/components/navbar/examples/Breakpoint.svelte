<script lang="ts">
  import { Navbar, NavBrand, NavUl, NavLi, uiHelpers } from '$lib';
  let nav = uiHelpers();
  let navStatus = $state(false);
  let toggleNav = nav.toggle;
  let closeNav = nav.close;
  $effect(() => {
    navStatus = nav.isOpen;
  });
</script>

<Navbar {toggleNav} {closeNav} {navStatus} breakPoint="lg">
  {#snippet brand()}
    <NavBrand siteName="Svelte 5">
      <img width="30" src="/images/svelte-icon.png" alt="svelte icon" />
    </NavBrand>
  {/snippet}

  <NavUl>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/components/navbar">Navbar</NavLi>
    <NavLi href="/components/footer">Footer</NavLi>
  </NavUl>
</Navbar>