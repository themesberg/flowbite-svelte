<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
    <NavBrand href="/" onclick={preventDefault}>
      <span class="text-xl font-semibold">Flowbite</span>
    </NavBrand>
    <NavHamburger />
    <NavUl>
      <NavLi href="/" onclick={preventDefault}>Home</NavLi>
      <NavLi href="/about" onclick={preventDefault}>About</NavLi>
      <NavLi href="/contact" onclick={preventDefault}>Contact</NavLi>
    </NavUl>
</Navbar>
