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
  import CloseButton from "$lib/utils/CloseButton.svelte";
  import { fly } from "svelte/transition";
  import Dialog from "./Dialog.svelte";

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

  let open: boolean = $state(false);
</script>

<Button class="ms-96 mt-12" onclick={() => (open = !open)}>Open dialog</Button>
<Dialog bind:open>
  <p>Raz</p>
  <p>Raz</p>
  <p>Raz</p>
</Dialog>

<!-- <style>
  /* enable transitions */
  [popover],
  dialog,
  ::backdrop {
    transition:
      display 3s allow-discrete,
      overlay 3s allow-discrete,
      opacity 3s;
    opacity: 0;
  }

  /* On Stage */
  :popover-open,
  :popover-open::backdrop,
  [open],
  [open]::backdrop {
    opacity: 1;
  }

  /* Off Stage */
  @starting-style {
    :popover-open,
    :popover-open::backdrop,
    [open],
    [open]::backdrop {
      opacity: 0;
    }
  }

  @layer demo.support {
    html {
      color-scheme: dark light;
    }

    ::backdrop {
      background-color: #0005;
    }
  }
</style> -->
