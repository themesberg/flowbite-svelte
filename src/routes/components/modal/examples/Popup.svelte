<script lang="ts">
  import { Modal, Button, uiHelpers } from '$lib';
  import { ExclamationCircleOutline } from 'flowbite-svelte-icons';
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
</script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Pop-up modal</Button>
</div>

<Modal size="xs" {modalStatus} {closeModal}>
  <div class="text-center">
    <ExclamationCircleOutline class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200" />
    <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
    <Button color="red" class="me-2">Yes, I'm sure</Button>
    <Button color="alternative">No, cancel</Button>
  </div>
</Modal>
