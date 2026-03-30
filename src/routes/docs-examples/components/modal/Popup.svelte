<script lang="ts">
  import { Button, Modal } from "flowbite-svelte";
  import { ExclamationCircleOutline } from "flowbite-svelte-icons";
  import { slide } from "svelte/transition";
  let popupModal = $state(false);
</script>

<Button onclick={() => (popupModal = true)}>Pop-up modal</Button>

<Modal form bind:open={popupModal} size="xs" transition={slide} permanent>
  <div class="text-center">
    <ExclamationCircleOutline class="text-body mx-auto mb-4 h-12 w-12" />
    <h3 class="text-body mb-5 text-lg font-normal">Are you sure you want to delete this product?</h3>
    <div class="space-x-2">
      <Button type="submit" value="yes" color="success">Yes, I'm sure</Button>
      <Button type="submit" value="no" color="danger">No, cancel</Button>
    </div>
  </div>
</Modal>
