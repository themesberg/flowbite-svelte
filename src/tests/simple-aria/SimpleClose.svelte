<script lang="ts">
  import { getSimpleContext } from "./SimpleContext";

  const state = getSimpleContext();

  function close() {
    if (state) {
      state.hidden = true;
    }
  }
</script>

<button data-testid="close-button" onclick={close}>Close Menu</button>
