<script lang="ts" module>
  export const testState = {
    clickCount: 0
  };
</script>

<script lang="ts">
  import GradientButton from "$lib/buttons/GradientButton.svelte";

  let clickCount = $state(0);

  function handleClick() {
    clickCount++;
    testState.clickCount = clickCount;
  }
</script>

<GradientButton onclick={handleClick}>Click Me</GradientButton>
