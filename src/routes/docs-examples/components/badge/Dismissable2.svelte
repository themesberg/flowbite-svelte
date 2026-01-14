<script lang="ts">
  import { Badge } from "flowbite-svelte";
  import { CloseCircleOutline } from "flowbite-svelte-icons";
</script>

<Badge dismissable large color="blue">
  Default
  {#snippet icon()}
    <button
      type="button"
      aria-label="Remove"
    >
      <CloseCircleOutline class="h-5 w-5" />
      <span class="sr-only">Remove badge</span>
    </button>
  {/snippet}
</Badge>
