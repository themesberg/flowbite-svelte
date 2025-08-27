<script>
  import { SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte";
  import { PenSolid, ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6">
  {#snippet icon()}
    <PenSolid class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
  <Listgroup active>
    <ListgroupItem class="flex">
      <ShareNodesSolid class="me-2 h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <PrinterSolid class="me-2 h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <DownloadSolid class="me-2 h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <FileCopySolid class="me-2 h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6" />
<SpeedDial tooltip="none" pill={false} placement="top-end">
  <Listgroup active>
    <ListgroupItem class="flex">
      <ShareNodesSolid class="me-2 h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex">
      <PrinterSolid class="me-2 h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex">
      <DownloadSolid class="me-2 h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex">
      <FileCopySolid class="me-2 h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
