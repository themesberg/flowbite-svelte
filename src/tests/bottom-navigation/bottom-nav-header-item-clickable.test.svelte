<script lang="ts">
  import { BottomNavHeaderItem } from "$lib";

  let clicked = $state(false);
  const handleClick = () => {
    clicked = true;
  };
</script>

<BottomNavHeaderItem itemName="Recent" active={false} onclick={handleClick} />

<div data-testid="clicked-state">{clicked ? "clicked" : "not-clicked"}</div>
