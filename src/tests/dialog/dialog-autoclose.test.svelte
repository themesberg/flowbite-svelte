<script lang="ts">
  import Dialog from "$lib/dialog/Dialog.svelte";

  let open = $state(true);
</script>

<Dialog bind:open autoclose={true}>
  <h3>Autoclose Dialog</h3>
  <p>Clicking any button will close this dialog.</p>
  <button type="button">Any Button</button>
</Dialog>
