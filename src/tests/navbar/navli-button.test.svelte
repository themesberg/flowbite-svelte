<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  function preventDefault(e: Event) {
    e.preventDefault();
  }
</script>

<Navbar>
  <NavHamburger />
  <NavUl>
    <NavLi data-testid="button-item">Button Item</NavLi>
    <NavLi href="/link" data-testid="link-item" onclick={preventDefault}>Link Item</NavLi>
  </NavUl>
</Navbar>
