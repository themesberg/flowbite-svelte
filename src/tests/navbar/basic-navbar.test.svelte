<script lang="ts">
  import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  <NavBrand href="https://flowbite-svelte.com/" onclick={preventDefault}>
    <span class="text-xl font-semibold">Flowbite</span>
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi href="https://flowbite-svelte.com/" onclick={preventDefault}>Home</NavLi>
    <NavLi href="https://flowbite-svelte.com/about" onclick={preventDefault}>About</NavLi>
    <NavLi href="https://flowbite-svelte.com/contact" onclick={preventDefault}>Contact</NavLi>
  </NavUl>
</Navbar>
