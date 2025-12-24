<script lang="ts">
  import Alert from "$lib/alert/Alert.svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<Alert>
  {#snippet icon()}
    <InfoCircleSolid class="h-5 w-5" />
  {/snippet}
  Alert with icon
</Alert>
