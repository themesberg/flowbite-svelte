<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CloseCircleOutline } from "flowbite-svelte-icons";
</script>

<Badge dismissable large>
  Default
  {#snippet icon()}
    <button
      type="button"
      class="bg-primary test-fg-primary hover:bg-primary-soft my-0.5 ms-1.5 -me-1.5 inline-flex items-center rounded-full p-0.5 text-sm text-white hover:text-white"
      aria-label="Remove"
    >
      <CloseCircleOutline class="h-4 w-4" />
      <span class="sr-only">Remove badge</span>
    </button>
  {/snippet}
</Badge>
