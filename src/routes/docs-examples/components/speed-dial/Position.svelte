<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import type { Placement } from "@floating-ui/dom";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
  type ExPosition = [string, Placement, Placement | "none"];
  const placements: ExPosition[] = [
    ["start-2 top-2", "right", "bottom"],
    ["end-6 top-2", "bottom", "left"],
    ["end-6 bottom-6", "left", "top"],
    ["start-2 bottom-6", "top", "right"]
  ];
</script>

{#each placements as [position, placement, tooltip]}
  <SpeedDialTrigger class="absolute {position}" />
  <SpeedDial {placement}>
    <SpeedDialButton name="Share" {tooltip}>
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Print" {tooltip}>
      <PrinterSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Download" {tooltip}>
      <DownloadSolid class="h-6 w-6" />
    </SpeedDialButton>
    <SpeedDialButton name="Copy" {tooltip}>
      <FileCopySolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
{/each}