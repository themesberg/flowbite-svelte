<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  // Expose isOpen binding for tests if needed, though we test interaction usually
  let { isOpen = $bindable(false) } = $props();
</script>

<div class="relative h-96 w-full">
  <div id="speed-dial-trigger-container">
    <SpeedDialTrigger id="dial-trigger" data-testid="speed-dial-trigger" class="absolute end-6 bottom-6" />
  </div>
  <SpeedDial bind:isOpen triggeredBy="#dial-trigger">
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
