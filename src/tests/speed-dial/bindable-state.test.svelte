<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  let { isOpen = $bindable(false) } = $props();
</script>

<div class="relative h-96 w-full">
  <button data-testid="external-toggle" onclick={() => (isOpen = !isOpen)}>Toggle Speed Dial</button>
  <button data-testid="external-open" onclick={() => (isOpen = true)}>Open Speed Dial</button>
  <button data-testid="external-close" onclick={() => (isOpen = false)}>Close Speed Dial</button>

  <SpeedDialTrigger id="bindable-trigger" data-testid="bindable-trigger" class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen triggeredBy="#bindable-trigger">
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
