<script lang="ts">
  import { ClipboardManager } from "$lib";

  let isOpen = $state(true);
</script>

<div data-testid="modal-clipboard">
  <ClipboardManager bind:open={isOpen} saveToStorage={false} />
</div>
