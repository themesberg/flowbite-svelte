<script lang="ts">
  import { ClipboardManager, Button, P } from "flowbite-svelte";

  let clipboardModal = $state(false);
</script>

<Button onclick={() => (clipboardModal = true)}>Show Clips</Button>

<ClipboardManager bind:open={clipboardModal} enableSelectionMenu={true} selectionTarget="#with-modal" storageKey="modal-clipboard" />

<P id="with-modal" class="py-4">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, repudiandae. Optio delectus nihil assumenda laborum voluptatum nam illum nobis blanditiis esse sapiente, cumque facere ab
  consequatur. Odit, architecto enim! At!
</P>
