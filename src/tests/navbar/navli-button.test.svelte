<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavHamburger onclick={toggle} />
    <NavUl {hidden}>
      <NavLi data-testid="button-item">Button Item</NavLi>
      <NavLi href="/link" data-testid="link-item">Link Item</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
