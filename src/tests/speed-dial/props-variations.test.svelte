<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";
  import type { Placement } from "@floating-ui/dom";

  let { pill = $bindable(true), textOutside = $bindable(false), tooltip = $bindable<Placement | "none">("left" as Placement | "none"), isOpen = $bindable(false) } = $props();
</script>

<div class="relative h-96 w-full">
  <SpeedDialTrigger id="props-trigger" data-testid="props-trigger" class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen {pill} {textOutside} {tooltip} triggeredBy="#props-trigger">
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
