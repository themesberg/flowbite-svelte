<script lang="ts">
  import { Button, SpeedDial, SpeedDialButton, Rating } from "flowbite-svelte";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid } from "flowbite-svelte-icons";
</script>

<Button color="success" class="absolute end-6 bottom-6 py-0">
  <Rating total={1} rating={0.5} size={48} /> Rating
</Button>
<SpeedDial placement="top-end">
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
