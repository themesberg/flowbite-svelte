<script lang="ts">
  import { Modal, Button } from "$lib";

  let open = $state(false);
</script>

<Button data-testid="open-modal-button" onclick={() => (open = true)}>Open Modal</Button>

<Modal data-testid="basic-modal" bind:open>
  <div>Modal Content</div>
</Modal>
