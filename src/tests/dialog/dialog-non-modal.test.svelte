<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open modal={false}>
  <h3>Non-Modal Dialog</h3>
  <p>This dialog is not modal, allowing interaction with the page behind it.</p>
</Dialog>
