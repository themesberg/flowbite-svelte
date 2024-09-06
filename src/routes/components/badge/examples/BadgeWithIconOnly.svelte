<script lang="ts">
  import { Badge } from '$lib';
  import { CheckOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-center gap-2">
  <Badge color="gray" rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-3 w-3 text-primary-800 dark:text-primary-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
</div>