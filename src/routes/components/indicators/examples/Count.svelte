<script lang="ts">
  import { Button, Indicator } from '$lib';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-center">
  <Button size="lg" class="relative">
    <EnvelopeSolid class="me-2 h-4 w-4 text-white dark:text-white" />
    <span class="sr-only">Notifications</span>
    Messages
    <Indicator color="red" border size="xl" placement="top-right">
      <span class="text-xs font-bold text-white">8</span>
    </Indicator>
  </Button>
</div>