<script lang="ts" module>
  export const testState = {
    clickCount: 0
  };
</script>

<script lang="ts">
  import ToolbarButton from "$lib/toolbar/ToolbarButton.svelte";
  
  let clickCount = $state(0);
  
  function handleClick() {
    clickCount++;
    testState.clickCount = clickCount;
  }
</script>

<ToolbarButton data-testid="clickable-button" onclick={handleClick}>
  Click Me
</ToolbarButton>
