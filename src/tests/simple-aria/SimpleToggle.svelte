<script lang="ts">
  import { getSimpleContext } from "./SimpleContext";

  const state = getSimpleContext();

  // Simplified reactive tracking - directly derive from the state
  const isExpanded = $derived(state ? !state.hidden : false);

  function toggle() {
    if (state) {
      state.hidden = !state.hidden;
    }
  }
</script>

<button data-testid="toggle-button" aria-expanded={isExpanded} onclick={toggle}>
  Toggle (aria-expanded: {isExpanded})
</button>
