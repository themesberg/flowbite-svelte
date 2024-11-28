<script lang="ts">
  import { Modal, Button, uiHelpers } from "$lib";
  const modalExample = uiHelpers();
  let modalStatus = $state(false);
  const closeModal = modalExample.close;
  $effect(() => {
    modalStatus = modalExample.isOpen;
  });
</script>

<div class="flex justify-center">
  <Button onclick={modalExample.toggle}>Default modal</Button>
</div>

<Modal {modalStatus} {closeModal}>
  {#snippet header()}
    <h2 class="weight-bold text-xl text-pink-700">Terms of Service</h2>
  {/snippet}
  <!-- Modal body -->
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.</p>
  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.</p>
</Modal>
