<script lang="ts">
  import { Navbar, NavUl, NavLi, NavHamburger } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  {#snippet children({ hidden: _hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl activeUrl="/about">
      <NavLi href="/home" activeClass="custom-active" nonActiveClass="custom-non-active" data-testid="custom-class-link" onclick={preventDefault}>Home</NavLi>
      <NavLi href="/about" data-testid="about-link" onclick={preventDefault}>About</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
