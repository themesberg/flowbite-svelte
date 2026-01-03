<script lang="ts" module>
  export const testState = {
    isOpen: false
  };
</script>

<script lang="ts">
  import Tooltip from "$lib/tooltip/Tooltip.svelte";

  let isOpen = $state(false);
  
  $effect(() => {
    testState.isOpen = isOpen;
  });
</script>

<button data-testid="open-trigger">Toggle</button>
<Tooltip bind:isOpen data-testid="open-tooltip">
  Bindable tooltip
</Tooltip>
