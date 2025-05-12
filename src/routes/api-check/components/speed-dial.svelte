<script lang="ts">
  import { SpeedDial, SpeedDialTrigger, SpeedDialButton, Button, Rating, Listgroup, ListgroupItem, Alert, type ButtonColor } from "$lib";
  import type { Middleware, Placement, Strategy } from "@floating-ui/dom";
  import { ShareNodesSolid, PrinterSolid, DownloadSolid, FileCopySolid, DotsHorizontalOutline, DotsVerticalOutline, PenSolid } from "flowbite-svelte-icons";

  let open = $state(false);

  const close = () => {
    open = false;
  };
  type ExPosition = [string, Placement, Placement | "none"];
  const placements: ExPosition[] = [
    ["start-2 top-2", "right", "bottom"],
    ["end-6 top-2", "bottom", "left"],
    ["end-6 bottom-6", "left", "top"],
    ["start-2 bottom-6", "top", "right"]
  ];
  let isOpen = $state(true)
</script>

<h1 class="my-4 text-3xl">Speed Dial</h1>

<Alert>
  <p>Note! Default class for speed dial was `fixed end-6 bottom-6`. Now no positioning is set by default.</p>
</Alert>

<h2 class="my-4 text-2xl">Default speed dial</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <SpeedDialTrigger class="absolute end-6 bottom-6" />
  <SpeedDial>
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
</div>

<h2 class="my-4 text-2xl">Colors</h2>

<div class="my-4 grid w-fit grid-cols-8 gap-x-6 gap-y-18 rounded border p-4 py-16">
  <SpeedDialTrigger color="primary" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purple" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="lime" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="dark" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="red" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="yellow" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="purpleToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyanToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="greenToBlue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purpleToPink" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="green" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="red" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="blue" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="purple" outline />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger color="blue" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="green" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="cyan" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger color="teal" gradient />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>

  <SpeedDialTrigger shadow gradient color="blue" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="green" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="purple" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
  <SpeedDialTrigger shadow gradient color="pink" />
  <SpeedDial>
    <SpeedDialButton name="Share">
      <ShareNodesSolid class="h-6 w-6" />
    </SpeedDialButton>
  </SpeedDial>
</div>

<h2 class="my-4 text-2xl">Square speed dial</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <SpeedDialTrigger class="absolute end-6 bottom-6" />
  <SpeedDial pill={false}>
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
</div>

<h2 class="my-4 text-2xl">Text inside button</h2>

<div class="relative my-4 h-96 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Text outside button</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <SpeedDialTrigger class="absolute end-24 bottom-6" />
  <SpeedDial tooltip="none" textOutside>
    <SpeedDialButton name="Share" textClass="text-pink-500">
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
  <SpeedDial pill={false} tooltip="none" textOutside>
    <SpeedDialButton name="Share" textClass="text-purple-500">
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
</div>

<h2 class="my-4 text-2xl">Dropdown menu</h2>

<div class="relative my-4 h-96 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Alternative menu</h2>

<div class="relative my-4 h-96 rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Alignment - Position</h2>

<div class="relative my-4 h-[400px] rounded border p-4">
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
</div>

<h2 class="my-4 text-2xl">Triggering</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <SpeedDialTrigger class="absolute start-2 bottom-6" />
  <SpeedDial trigger="hover" tooltip="right">
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
  <SpeedDial trigger="click">
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
</div>

<h2 class="my-4 text-2xl">Custom main button</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <Button color="green" class="absolute end-6 bottom-6 py-0">
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
</div>


<h2 class="my-4 text-2xl">Binding isOpen</h2>

<div class="relative my-4 h-96 rounded border p-4">
  <SpeedDialTrigger class="absolute end-6 bottom-6" />
  <SpeedDial bind:isOpen>
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
</div>