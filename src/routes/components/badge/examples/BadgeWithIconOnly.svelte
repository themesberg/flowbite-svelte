<script lang="ts">
  import { Badge } from '$lib';
  import { CheckOutline, InfoCircleSolid, UserCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="flex justify-center gap-2">
  <Badge color="gray" rounded large class="!p-1 !font-semibold">
    <CheckOutline class="h-4 w-4" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="!p-1 !font-semibold">
    <InfoCircleSolid class="h-4 w-4 text-primary-600 dark:text-primary-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large color="blue" class="!p-1 !font-semibold">
    <UserCircleSolid class="h-4 w-4 text-blue-600 dark:text-blue-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
</div>
