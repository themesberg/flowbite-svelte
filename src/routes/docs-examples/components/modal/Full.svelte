<script lang="ts">
  import { Button, Modal, P } from "$lib";
  let defaultModal = $state(false);
</script>

<Button onclick={() => (defaultModal = true)}>Default modal</Button>
<Modal bind:open={defaultModal} fullscreen size="none" class="bg-gray-100">
  <div class="flex h-screen items-center justify-center">
    <P class="text-3xl">Content</P>
  </div>
</Modal>
