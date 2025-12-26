<script lang="ts">
  import { getSimpleContext } from "./SimpleContext";

  const state = getSimpleContext();

  // Alternative approach: use $effect to track changes
  let isExpanded = $derived(false);

  $effect(() => {
    if (state) {
      isExpanded = !state.hidden;
    }
  });

  function toggle() {
    if (state) {
      state.hidden = !state.hidden;
    }
  }
</script>

<button data-testid="toggle-button-effect" aria-expanded={isExpanded} onclick={toggle}>
  Toggle Effect (aria-expanded: {isExpanded})
</button>
