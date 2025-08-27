<script>
  import { SpeedDial, SpeedDialTrigger, Listgroup, ListgroupItem } from "flowbite-svelte";
  import { DotsHorizontalOutline, DotsVerticalOutline, ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<SpeedDialTrigger class="absolute end-24 bottom-6">
  {#snippet icon()}
    <DotsHorizontalOutline class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" placement="top-end">
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <ShareNodesSolid class="h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <PrinterSolid class="h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <DownloadSolid class="h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <FileCopySolid class="h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>

<SpeedDialTrigger class="absolute end-6 bottom-6">
  {#snippet icon()}
    <DotsVerticalOutline class="h-8 w-8" />
  {/snippet}
</SpeedDialTrigger>
<SpeedDial tooltip="none" pill={false} placement="top-end">
  <Listgroup class="divide-none" active>
    <ListgroupItem class="flex gap-2 md:px-5">
      <ShareNodesSolid class="h-5 w-5" />
      Share
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <PrinterSolid class="h-5 w-5" />
      Print
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <DownloadSolid class="h-5 w-5" />
      Save
    </ListgroupItem>
    <ListgroupItem class="flex gap-2 md:px-5">
      <FileCopySolid class="h-5 w-5" />
      Copy
    </ListgroupItem>
  </Listgroup>
</SpeedDial>
