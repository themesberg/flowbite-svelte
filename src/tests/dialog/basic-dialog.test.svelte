<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open>
  <h3>Basic Dialog</h3>
  <p>This is a basic modal dialog.</p>
</Dialog>
