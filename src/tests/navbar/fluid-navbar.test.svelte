<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";
</script>

<Navbar fluid>
  {#snippet children({ hidden: _hidden, toggle })}
    <NavBrand href="/">Flowbite</NavBrand>
    <NavHamburger onclick={toggle} />
    <NavUl>
      <NavLi href="/">Home</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
