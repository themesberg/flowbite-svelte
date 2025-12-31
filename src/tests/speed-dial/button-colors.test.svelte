<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid } from "flowbite-svelte-icons";
  import type { ButtonProps } from "$lib/types";

  let { color = $bindable<ButtonProps["color"]>("brand"), isOpen = $bindable(false) } = $props();

  // Create a derived value to satisfy TypeScript
  let buttonColor = $derived(color as ButtonProps["color"]);
</script>

<div class="relative h-96 w-full">
  <SpeedDialTrigger id="color-trigger" data-testid="color-trigger" class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen triggeredBy="#color-trigger">
    <SpeedDialButton name="Share" color={buttonColor}>
      <ShareNodesSolid class="h-5 w-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Print" color={buttonColor}>
      <PrinterSolid class="h-5 w-5" />
    </SpeedDialButton>
    <SpeedDialButton name="Download" color={buttonColor}>
      <ImageSolid class="h-5 w-5" />
    </SpeedDialButton>
  </SpeedDial>
</div>
