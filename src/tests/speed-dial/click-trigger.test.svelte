<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";

  let { isOpen = $bindable(false) } = $props();
</script>

<div class="relative h-96 w-full">
  <SpeedDialTrigger id="click-dial-trigger" data-testid="click-trigger" class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen trigger="click" triggeredBy="#click-dial-trigger">
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
