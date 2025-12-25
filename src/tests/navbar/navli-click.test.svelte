<script lang="ts" module>
  export const testState = {
    clickCount: 0
  };
</script>

<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  let clickCount = $state(0);

  function handleClick() {
    clickCount++;
    testState.clickCount = clickCount;
  }
</script>

<Navbar>
  {#snippet children({ hidden, toggle })}
    <NavHamburger onclick={toggle} data-testid="hamburger" />
    <NavUl {hidden}>
      <NavLi href="/docs/pages/introduction" onclick={handleClick} data-testid="clickable-link">Clickable</NavLi>
    </NavUl>
  {/snippet}
</Navbar>
