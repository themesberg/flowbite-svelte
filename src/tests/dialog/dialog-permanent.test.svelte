<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open permanent={true}>
  <h3>Permanent Dialog</h3>
  <p>This dialog cannot be closed by ESC or outside clicks.</p>
</Dialog>
