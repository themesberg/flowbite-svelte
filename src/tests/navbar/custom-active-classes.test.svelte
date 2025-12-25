<script lang="ts">
  import { Navbar, NavUl, NavLi, NavHamburger } from "$lib";
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl {hidden} activeUrl="/about">
      <NavLi href="/home" activeClass="custom-active" nonActiveClass="custom-non-active" data-testid="custom-class-link">
        Home
      </NavLi>
      <NavLi href="/about" data-testid="about-link">About</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
