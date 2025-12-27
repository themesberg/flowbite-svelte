<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  let activeUrl = $state("/about");

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  {#snippet children({ hidden: _hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl bind:activeUrl>
      <NavLi href="/" data-testid="home-link" onclick={preventDefault}>Home</NavLi>
      <NavLi href="/about" data-testid="about-link" onclick={preventDefault}>About</NavLi>
      <NavLi href="/contact" data-testid="contact-link" onclick={preventDefault}>Contact</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
