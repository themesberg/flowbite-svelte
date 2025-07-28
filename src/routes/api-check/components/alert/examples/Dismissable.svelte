<script>
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid, EnvelopeSolid } from "flowbite-svelte-icons";
  import { fly } from "svelte/transition";
</script>

<Alert dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple default alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="blue" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-blue-800 dark:hover:text-blue-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="red" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-red-800 dark:hover:text-red-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="green" dismissable>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  A simple info alert with an
  <a href="/" class="font-semibold underline hover:text-green-800 dark:hover:text-green-900">example link</a>
  . Give it a click if you like.
</Alert>
<Alert color="yellow" dismissable transition={fly} params={{ x: 200 }}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with non default animation - fly away.
</Alert>
<Alert color="purple" dismissable closeIcon={EnvelopeSolid}>
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  An alert with the custom dismissal button. slot
</Alert>