<script lang="ts">
  import { Modal, Button } from "$lib";

  let smallOpen = $state(false);
  let largeOpen = $state(false);
</script>

<Button onclick={() => (smallOpen = true)}>Open Small Modal</Button>
<Button onclick={() => (largeOpen = true)}>Open Large Modal</Button>

<Modal bind:open={smallOpen} size="sm">
  <div>Small Modal</div>
</Modal>

<Modal bind:open={largeOpen} size="lg">
  <div>Large Modal</div>
</Modal>
