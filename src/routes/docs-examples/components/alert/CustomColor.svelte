<script lang="ts">
  import { Alert } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
</script>

<!-- Simple custom color override -->
<Alert class="bg-sky-500 text-white">Simple custom colored alert</Alert>

<!-- Custom color with icon -->
<Alert class="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom purple alert!</span>
  With icon and custom styling.
</Alert>

<!-- Custom color with border -->
<Alert border class="border-teal-300 bg-teal-50 text-teal-900 dark:border-teal-700 dark:bg-teal-900 dark:text-teal-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom teal alert!</span>
  With border styling.
</Alert>

<!-- Dismissable with color="none" for full custom control -->
<Alert dismissable color="none" closeColor="none" class="bg-indigo-100 text-indigo-900 dark:bg-indigo-900 dark:text-indigo-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom dismissable!</span>
  Use color="none" and closeColor="none" for full control.
</Alert>

<!-- Dismissable with predefined closeColor -->
<Alert dismissable color="none" closeColor="danger" class="bg-pink-100 text-pink-900 dark:bg-pink-900 dark:text-pink-100">
  {#snippet icon()}<InfoCircleSolid class="h-5 w-5" />{/snippet}
  <span class="font-medium">Custom alert with danger close button!</span>
  Mix custom colors with predefined closeColor.
</Alert>
