<script lang="ts">
  import { SpeedDial, SpeedDialButton } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  let { isOpen = $bindable(false) } = $props();
</script>

<div class="relative h-96 w-full">
  <button data-testid="external-toggle" onclick={() => (isOpen = !isOpen)}>Toggle Speed Dial</button>
  <button data-testid="external-open" onclick={() => (isOpen = true)}>Open Speed Dial</button>
  <button data-testid="external-close" onclick={() => (isOpen = false)}>Close Speed Dial</button>
  <button data-testid="bindable-trigger" class="absolute end-6 bottom-6" onclick={() => (isOpen = !isOpen)}>Trigger</button>

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
