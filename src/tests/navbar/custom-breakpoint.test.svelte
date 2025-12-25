<script lang="ts">
  import { Navbar, NavUl, NavLi, NavHamburger } from "$lib";
</script>

<Navbar breakpoint="lg" data-testid="navbar-lg">
  {#snippet children({ hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl {hidden}>
      <NavLi href="/">Home</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
