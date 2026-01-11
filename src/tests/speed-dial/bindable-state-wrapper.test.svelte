<script lang="ts">
  import { SpeedDial, SpeedDialButton } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  let isOpen = $state(false);
</script>

<div class="relative h-96 w-full">
  <button data-testid="programmatic-open" onclick={() => (isOpen = true)}>Open Programmatically</button>
  <button data-testid="programmatic-close" onclick={() => (isOpen = false)}>Close Programmatically</button>
  <button data-testid="wrapper-trigger" class="absolute end-6 bottom-6" onclick={() => (isOpen = !isOpen)}>Trigger</button>

  <SpeedDial bind:isOpen trigger="click" class="absolute end-6 bottom-16">
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-5 w-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Print">
      <PrinterSolid class="h-5 w-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Download">
      <ImageSolid class="h-5 w-5" />
    </SpeedDialButton>
  </SpeedDial>
</div>
