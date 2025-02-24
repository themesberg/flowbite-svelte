<script lang="ts">
  import { Badge } from "$lib";
  import { CheckFlowbite, InfoCircleFlowbite, UserCircleFlowbite } from "svelte-animated-icons";
</script>

<div class="flex justify-center gap-2">
  <Badge color="gray" rounded-sm large class="p-1! font-semibold!">
    <CheckFlowbite class="h-6 w-6" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large class="p-1! font-semibold!">
    <InfoCircleFlowbite class="h-6 w-6 text-primary-600 dark:text-primary-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
  <Badge rounded large color="blue" class="p-1! font-semibold!">
    <UserCircleFlowbite class="h-6 w-6 text-blue-600 dark:text-blue-400" />
    <span class="sr-only">Icon description</span>
  </Badge>
</div>
