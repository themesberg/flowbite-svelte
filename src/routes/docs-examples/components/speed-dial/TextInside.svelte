<script>
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton } from "flowbite-svelte";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6" />
<SpeedDial tooltip="none">
  <SpeedDialButton name="Share" textClass="text-blue-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial pill={false} tooltip="none">
  <SpeedDialButton name="Share" textClass="text-green-500">
    <ShareNodesSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Save">
    <DownloadSolid class="h-6 w-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="h-6 w-6" />
  </SpeedDialButton>
</SpeedDial>
