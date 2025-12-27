<script lang="ts" module>
  export const testState = {
    clickCount: 0
  };
</script>

<script lang="ts">
  import { Navbar, NavLi, NavUl, NavHamburger } from "$lib";

  let clickCount = $state(0);

  function handleClick(e: Event) {
    e.preventDefault();
    e.stopPropagation();
    clickCount++;
    testState.clickCount = clickCount;
  }
</script>

<Navbar>
  <NavHamburger data-testid="hamburger" />
  <NavUl>
    <NavLi href="/" onclick={handleClick} data-testid="clickable-link">Clickable</NavLi>
  </NavUl>
</Navbar>
