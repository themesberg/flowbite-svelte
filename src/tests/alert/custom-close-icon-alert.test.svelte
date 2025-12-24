<script lang="ts">
  import Alert from "$lib/alert/Alert.svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Alert dismissable closeIcon={EnvelopeSolid}>Alert with custom close icon</Alert>
