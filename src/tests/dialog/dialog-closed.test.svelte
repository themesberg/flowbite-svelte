<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(false);
</script>

<Dialog bind:open>
  <h3>Closed Dialog</h3>
  <p>This dialog is initially closed.</p>
</Dialog>

<button onclick={() => (open = true)}>Open Dialog</button>
