<script lang="ts">
  import { Modal, Button } from "$lib";

  let open = $state(false);
</script>

<Button onclick={() => open = true}>Open Modal</Button>

<Modal bind:open>
  <div>Modal Content</div>
</Modal>
