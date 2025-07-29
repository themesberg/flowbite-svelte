<script>
  import { Alert } from "flowbite-svelte";
  let alertStatus = $state(true);
  const closeAlert = () => {
    alert("Clicked closeAlert.");
    alertStatus = !alertStatus;
  };
</script>

<Alert dismissable onclick={closeAlert} bind:alertStatus>Close me</Alert>
