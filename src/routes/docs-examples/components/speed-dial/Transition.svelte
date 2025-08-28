<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
  import { blur, scale } from "svelte/transition";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6" />
<SpeedDial transition={blur} transitionParams={{ duration: 1000 }}>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial transition={scale} transitionParams={{ duration: 1000 }}>
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
