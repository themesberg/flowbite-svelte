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
  console.log("dupa");
</script>

<Button>Dropdown</Button>
<Dropdown>
  <DropdownHeader>Header</DropdownHeader>
  <DropdownGroup>
    <DropdownItem>Raz</DropdownItem>
    <DropdownItem>Dwa</DropdownItem>
  </DropdownGroup>
</Dropdown>

<Rating id="example-1" total={5} size={50} rating={1.4} />
<Rating id="example-1b" total={5} size={50} rating={4.66}></Rating>

<Rating id="example-1b" icon={MyStar({ fillColor: "#F492C1", strokeColor: "#008800" })} total={5} size={50} rating={4.66} />

<P>
  Base: {base({ class: "blada", color: "blue" })}
</P>
<p>
  href: {hrefClass()}
</p>
