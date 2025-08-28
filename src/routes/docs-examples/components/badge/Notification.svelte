<script lang="ts">
  import { Button, Indicator } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="blue" border size="xl" placement="top-right" class="text-xs font-bold">18</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="red" border size="xl" placement="top-right" class="text-xs font-bold">20</Indicator>
</Button>

<Button class="relative" size="sm">
  <EnvelopeSolid class="text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  <Indicator color="gray" border size="xl" placement="bottom-right" class="text-xs font-bold">20</Indicator>
</Button>
