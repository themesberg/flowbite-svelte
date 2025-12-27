<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  let isOpen = $state(false);
</script>

<div class="relative h-96 w-full">
  <button data-testid="programmatic-open" onclick={() => (isOpen = true)}>Open Programmatically</button>
  <button data-testid="programmatic-close" onclick={() => (isOpen = false)}>Close Programmatically</button>

  <SpeedDialTrigger id="wrapper-trigger" data-testid="wrapper-trigger" class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen triggeredBy="#wrapper-trigger">
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
