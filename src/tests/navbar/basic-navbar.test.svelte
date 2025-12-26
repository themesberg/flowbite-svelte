<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  {#snippet children({ hidden: _hidden, toggle })}
    <NavBrand href="/" onclick={preventDefault}>
      <span class="text-xl font-semibold">Flowbite</span>
    </NavBrand>
    <NavHamburger onclick={toggle} />
    <NavUl>
      <NavLi href="/" onclick={preventDefault}>Home</NavLi>
      <NavLi href="/about" onclick={preventDefault}>About</NavLi>
      <NavLi href="/contact" onclick={preventDefault}>Contact</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
