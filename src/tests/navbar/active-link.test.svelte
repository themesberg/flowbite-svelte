<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  let activeUrl = $state("/about");
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl {hidden} bind:activeUrl>
      <NavLi href="/" data-testid="home-link">Home</NavLi>
      <NavLi href="/about" data-testid="about-link">About</NavLi>
      <NavLi href="/contact" data-testid="contact-link">Contact</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
