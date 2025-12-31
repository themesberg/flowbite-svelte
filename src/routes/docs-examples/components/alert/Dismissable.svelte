<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid, EnvelopeSolid } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
</script>

<Alert color="brand" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="danger" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple danger alert with an
  <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="success" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple success alert with an
  <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="warning" dismissable transition={fly} params={{ x: 200 }}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with non default animation - fly away.
</Alert>
<Alert color="gray" dismissable closeIcon={EnvelopeSolid}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with the custom dismissal button.
</Alert>
