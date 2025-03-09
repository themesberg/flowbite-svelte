<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownGroup from "$lib/dropdown/DropdownGroup.svelte";
  import DropdownHeader from "$lib/dropdown/DropdownHeader.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
  import Rating from "$lib/rating/Rating.svelte";
  import Star from "$lib/rating/Star.svelte";
  import type { ComponentInternals, ComponentProps } from "svelte";
  import { badge } from "$lib/badge/theme";
  import P from "$lib/typography/paragraph/P.svelte";

  import SpeedDial from "$lib/speed-dial/SpeedDial.svelte";
  import SpeedDialButton from "$lib/speed-dial/SpeedDialButton.svelte";
  import { DownloadSolid, FileCopySolid, PrinterSolid, ShareNodesSolid } from "flowbite-svelte-icons";
  import DarkMode from "$lib/darkmode/DarkMode.svelte";
  import type { Placement } from "@floating-ui/utils";
  import { twJoin, twMerge } from "tailwind-merge";

  const { base, hrefClass } = badge({ class: "dupa", color: "red" });
  let searchTerm = $state("");
  let items = [
    { id: 1, maker: "Toyota", type: "ABC", make: 2017 },
    { id: 2, maker: "Ford", type: "CDE", make: 2018 },
    { id: 3, maker: "Volvo", type: "FGH", make: 2019 },
    { id: 4, maker: "Saab", type: "IJK", make: 2020 }
  ];
  let filteredItems = $derived(items.filter((item) => item.maker.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1));

  function MyStar(props: ComponentProps<typeof Star>) {
    return function (anchor: ComponentInternals, _props: ComponentProps<typeof Star>) {
      return Star(anchor, { ..._props, ...props });
    };
  }
  const placements: [string, Placement, Placement][] = [
    ["start-2 top-2", "right", "bottom"],
    ["end-6 top-2", "bottom", "left"],
    ["end-6 bottom-6", "left", "top"],
    ["start-2 bottom-6", "top", "right"]
  ];
</script>

<div class="mx-48">
  <DarkMode></DarkMode>
  <p>Tekst</p>
  <div>
    <Button>Dropdown</Button>
    <Dropdown trigger="hover" arrow class="m-20 p-2">
      <DropdownHeader>Header</DropdownHeader>
      <DropdownGroup>
        <DropdownItem>Raz</DropdownItem>
        <DropdownItem>Dwa</DropdownItem>
      </DropdownGroup>
    </Dropdown>
  </div>
  {twMerge("start-6", "start-5")}
</div>

<SpeedDial defaultClass="fixed end-6 bottom-6" placement="left">
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="w-6 h-6" />
  </SpeedDialButton>
</SpeedDial>

<SpeedDial defaultClass="fixed start-2 bottom-6" placement="left">
  <SpeedDialButton name="Share">
    <ShareNodesSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Print">
    <PrinterSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Download">
    <DownloadSolid class="w-6 h-6" />
  </SpeedDialButton>
  <SpeedDialButton name="Copy">
    <FileCopySolid class="w-6 h-6" />
  </SpeedDialButton>
</SpeedDial>

{#if false}
  {#each placements as [position, placement, tooltip]}
    <SpeedDial defaultClass="fixed {position}" {placement}>
      <SpeedDialButton name="Share" {tooltip}>
        <ShareNodesSolid class="w-6 h-6" />
      </SpeedDialButton>
      <SpeedDialButton name="Print" {tooltip}>
        <PrinterSolid class="w-6 h-6" />
      </SpeedDialButton>
      <SpeedDialButton name="Download" {tooltip}>
        <DownloadSolid class="w-6 h-6" />
      </SpeedDialButton>
      <SpeedDialButton name="Copy" {tooltip}>
        <FileCopySolid class="w-6 h-6" />
      </SpeedDialButton>
    </SpeedDial>
  {/each}
{/if}
