<script lang="ts">
  import Alert from "$lib/alert/Alert.svelte";

  let alertStatus = $state(false);
</script>

<Alert bind:alertStatus>Hidden alert</Alert>
