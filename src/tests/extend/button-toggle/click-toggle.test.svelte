<script lang="ts" module>
  export const testState = {
    clickedValue: null as string | null,
    clickCount: 0
  };
</script>

<script lang="ts">
  import { ButtonToggle } from "$lib";

  function handleClick(event: MouseEvent) {
    const target = event.currentTarget as HTMLButtonElement;
    const value = target.getAttribute("value");
    testState.clickedValue = value;
    testState.clickCount++;
  }
</script>

<ButtonToggle value="clickable" onclick={handleClick} data-testid="clickable-toggle">Click Me</ButtonToggle>
