<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";
  import type { Placement } from "@floating-ui/dom";

  let { placement = $bindable<Placement>("top" as Placement), isOpen = $bindable(false) } = $props();
</script>

<div class="relative flex h-96 w-full items-center justify-center">
  <SpeedDialTrigger id="placement-trigger" data-testid="placement-trigger" />
  <SpeedDial bind:isOpen {placement} triggeredBy="#placement-trigger">
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
