<script lang="ts" module>
  export const testState = {
    toastVisible: true,
    closeEventFired: false
  };
</script>

<script lang="ts">
  import Toast from "$lib/toast/Toast.svelte";
  
  let toastVisible = $state(true);
  
  function handleClose() {
    testState.closeEventFired = true;
  }
  
  $effect(() => {
    testState.toastVisible = toastVisible;
  });
</script>

<Toast bind:toastStatus={toastVisible} data-testid="closeable-toast" onclose={handleClose}>
  Closeable toast
</Toast>
