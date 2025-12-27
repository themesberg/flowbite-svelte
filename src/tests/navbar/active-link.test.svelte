<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  let activeUrl = $state("https://flowbite-svelte.com/about");

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  {#snippet children({ hidden: _hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl bind:activeUrl>
      <NavLi href="https://flowbite-svelte.com/" data-testid="home-link" onclick={preventDefault}>Home</NavLi>
      <NavLi href="https://flowbite-svelte.com/about" data-testid="about-link" onclick={preventDefault}>About</NavLi>
      <NavLi href="https://flowbite-svelte.com/contact" data-testid="contact-link" onclick={preventDefault}>Contact</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
