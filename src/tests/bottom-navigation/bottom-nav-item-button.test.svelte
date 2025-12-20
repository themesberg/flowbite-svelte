<script lang="ts">
  import { BottomNav, BottomNavItem } from "$lib";
  import { HomeOutline } from "flowbite-svelte-icons";

  let clicked = $state(false);
  const handleClick = () => {
    clicked = true;
  };
</script>

<BottomNav>
  <BottomNavItem btnName="Home" onclick={handleClick}>
    <HomeOutline />
  </BottomNavItem>
</BottomNav>

<div data-testid="clicked-state">{clicked ? "clicked" : "not-clicked"}</div>
