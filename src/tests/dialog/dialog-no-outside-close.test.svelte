<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open outsideclose={false}>
  <h3>No Outside Close</h3>
  <p>Clicking outside won't close this dialog.</p>
</Dialog>
