<script lang="ts">
  import { Modal, Button } from "$lib";

  let open = $state(false);
</script>

<Button data-testid="open-title-modal-button" onclick={() => (open = true)}>Open Modal</Button>

<Modal data-testid="open-title-modal" bind:open title="Modal Title">
  <div>Modal Content with Title</div>
</Modal>
