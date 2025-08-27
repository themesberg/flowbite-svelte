<script>
  import { Badge } from "flowbite-svelte";
  import { CloseCircleSolid } from "flowbite-svelte-icons";
</script>

<Badge dismissable>
  Default
  {#snippet icon()}
    <button type="button" class="bg-primary-500 dark:bg-primary-400 dark:text-primary-800 hover:bg-primary-900 my-0.5 ms-1.5 -me-1.5 inline-flex items-center rounded-full p-0.5 text-sm text-white hover:text-white dark:hover:bg-red-900 dark:hover:text-yellow-300" aria-label="Remove">
      <CloseCircleSolid class="h-4 w-4" />
      <span class="sr-only">Remove badge</span>
    </button>
  {/snippet}
</Badge>
