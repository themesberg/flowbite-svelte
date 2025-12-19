<script lang="ts">
  import { Alert, Button } from "flowbite-svelte";
  let alertStatus = $state(true);
  
  const closeAlert = () => {
    alertStatus = false;
  };
  
  const showAlert = () => {
    alertStatus = true;
  };
</script>

{#if alertStatus}
  <Alert dismissable onclick={closeAlert}>
    <span class="font-medium">Info alert!</span> You can close this alert by clicking the close button.
  </Alert>
{/if}

{#if !alertStatus}
  <div class="mt-4">
    <Button onclick={showAlert}>Show Alert Again</Button>
  </div>
{/if}
