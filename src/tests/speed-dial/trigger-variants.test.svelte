<script lang="ts">
  import { SpeedDial, SpeedDialButton, SpeedDialTrigger } from "$lib";
  import { ShareNodesSolid, PrinterSolid, ImageSolid, PlusOutline } from "flowbite-svelte-icons";

  let { gradient = $bindable(false), customIcon = $bindable(false), isOpen = $bindable(false) } = $props();
</script>

{#snippet customIconSnippet()}
  <PlusOutline class="h-8 w-8" data-testid="custom-icon" />
{/snippet}

<div class="relative h-96 w-full">
  <SpeedDialTrigger id="trigger-variant" data-testid="trigger-variant" class="absolute end-6 bottom-6" {gradient} name="Custom actions menu" icon={customIcon ? customIconSnippet : undefined} />
  <SpeedDial bind:isOpen triggeredBy="#trigger-variant">
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
