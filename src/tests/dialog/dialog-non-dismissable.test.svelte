<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open dismissable={false}>
  <h3>Non-Dismissable Dialog</h3>
  <p>This dialog has no close button.</p>
</Dialog>
