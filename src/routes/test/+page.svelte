<script lang="ts">
  import Button from "$lib/buttons/Button.svelte";
  import Dropdown from "$lib/dropdown/Dropdown.svelte";
  import DropdownGroup from "$lib/dropdown/DropdownGroup.svelte";
  import DropdownHeader from "$lib/dropdown/DropdownHeader.svelte";
  import DropdownItem from "$lib/dropdown/DropdownItem.svelte";
  import Rating from "$lib/rating/Rating.svelte";
  import Star from "$lib/rating/Star.svelte";
  import type { ComponentInternals, ComponentProps } from "svelte";

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

<Rating id="example-1b" Icon={MyStar({ fillColor: "#F492C1", strokeColor: "#008800" })} total={5} size={50} rating={4.66} />
