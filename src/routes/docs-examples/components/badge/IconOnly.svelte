<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CheckOutline } from "flowbite-svelte-icons";

  const colors = [undefined, "success", "warning", "danger", "blue", "lime", "amber", "purple"] as const;
</script>

{#each colors as color}
  <Badge rounded large {color} class="h-5 w-5 rounded-full">
    <CheckOutline class="h-3 w-3" />
    <span class="sr-only">Icon description</span>
  </Badge>
{/each}
