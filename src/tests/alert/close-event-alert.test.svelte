<script lang="ts">
  import Alert from "$lib/alert/Alert.svelte";

  let closeEventFired = $state(false);

  function handleClose() {
    closeEventFired = true;
  }
</script>

<Alert dismissable onclose={handleClose}>Alert with close handler</Alert>
{#if closeEventFired}
  <p data-testid="close-indicator">Close event fired</p>
{/if}
