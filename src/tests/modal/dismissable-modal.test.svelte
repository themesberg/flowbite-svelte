<script lang="ts">
  import { Modal, Button } from "$lib";

  let open = $state(false);
</script>

<Button data-testid="open-dismissable-modal-button" onclick={() => (open = true)}>Open Modal</Button>

<Modal data-testid="dismissable-modal" bind:open dismissable>
  <div>Dismissable Modal</div>
</Modal>
