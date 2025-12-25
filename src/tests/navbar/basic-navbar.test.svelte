<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavBrand href="/">
      <span class="text-xl font-semibold">Flowbite</span>
    </NavBrand>
    <NavHamburger onclick={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
      <NavLi href="/about">About</NavLi>
      <NavLi href="/contact">Contact</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
