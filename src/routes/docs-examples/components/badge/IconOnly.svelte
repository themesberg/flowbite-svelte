<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";
</script>

<Badge color="gray" large class="p-1! font-semibold!">
  <CheckOutline class="h-3 w-3" />
  <span class="sr-only">Icon description</span>
</Badge>
<Badge rounded large class="p-1! font-semibold!">
  <CheckOutline class="text-primary-800 dark:text-primary-400 h-3 w-3" />
  <span class="sr-only">Icon description</span>
</Badge>
