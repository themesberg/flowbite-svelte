<script lang="ts">
  import { Popover, Button } from "flowbite-svelte";
  import { DatabaseSolid, ChevronRightOutline } from "flowbite-svelte-icons";
</script>

<Button>
  <DatabaseSolid class="me-2 h-5 w-5" /> Storage status
</Button>
<Popover class="w-64 text-sm">
  <div class="space-y-2">
    <h3 class="font-semibold text-heading">Available storage</h3>
    <p class="text-body">
      This server has <span class="font-semibold text-heading">30</span>
      of
      <span class="font-semibold text-heading">150 GB</span>
      of block storage remaining.
    </p>
    <div class="mb-4 h-2.5 w-full rounded-full bg-neutral-quaternary">
      <div class="h-2.5 rounded-full bg-danger" style="width: 85%"></div>
    </div>
    <a href="/" class="text-fg-brand flex items-center font-medium hover:underline">
      Upgrade now <ChevronRightOutline class="text-fg-brand ms-1.5 h-4 w-4" />
    </a>
  </div>
</Popover>
