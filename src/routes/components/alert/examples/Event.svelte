<script lang="ts">
  import { Alert } from '$lib';
  let alertEventStatus = $state(true);
  function handleClose() {
    console.log('Alert dismissed');
    alert('Alert dismissed');
    alertEventStatus = false;
  }
</script>

<Alert dismissable onclick={handleClose} bind:alertStatus={alertEventStatus}>Close me</Alert>