<script lang="ts" module>
  export const testState = {
    clickCount: 0
  };
</script>

<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";

  let clickCount = $state(0);

  function handleClick() {
    clickCount++;
    testState.clickCount = clickCount;
  }
</script>

<Button onclick={handleClick}>Click Me</Button>
