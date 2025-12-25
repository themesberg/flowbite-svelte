<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";
</script>

<Navbar class="custom-navbar-class">
  {#snippet children({ hidden, toggle })}
    <NavBrand href="/" class="custom-brand-class">Brand</NavBrand>
    <NavHamburger onclick={toggle} class="custom-hamburger-class" />
    <NavUl {hidden} class="custom-ul-class">
      <NavLi href="/" class="custom-li-class">Home</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
