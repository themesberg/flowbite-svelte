<script>
  import { Indicator, Button } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Button size="lg" class="relative">
  <EnvelopeSolid class="me-2 h-6 w-6 text-white dark:text-white" />
  <span class="sr-only">Notifications</span>
  Messages
  <Indicator color="red" border size="xl" placement="top-right">
    <span class="text-xs font-bold text-white">8</span>
  </Indicator>
</Button>