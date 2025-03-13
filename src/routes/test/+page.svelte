<script lang="ts">
  import { badge } from "$lib/badge/theme";
  import Star from "$lib/rating/Star.svelte";
  import { mount, type ComponentInternals, type ComponentProps } from "svelte";
  import Comp from "./Component.svelte";
  import Inner from "./Inner.svelte";

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

  function onload(ev) {
    mount(Comp, { target: ev.target.contentDocument?.body, props: { name: "iframe" } });
    console.log(ev.target.childNodes);
  }
</script>

<Comp></Comp>

<iframe title="iframe" {onload}>
  <div>Inside</div>
</iframe>

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
