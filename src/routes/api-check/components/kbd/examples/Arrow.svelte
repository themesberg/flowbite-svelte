<script>
  import { Kbd } from "flowbite-svelte";
  import { CaretUpSolid, CaretDownSolid, CaretRightSolid, CaretLeftSolid } from "flowbite-svelte-icons";
</script>

<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretUpSolid />
  <span class="sr-only">Arrow key up</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretDownSolid />
  <span class="sr-only">Arrow key down</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretLeftSolid />
  <span class="sr-only">Arrow key left</span>
</Kbd>
<Kbd class="me-1 inline-flex items-center px-2 py-1.5">
  <CaretRightSolid />
  <span class="sr-only">Arrow key right</span>
</Kbd>
