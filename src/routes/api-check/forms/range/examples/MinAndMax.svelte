<script>
  import { Range, Label } from "flowbite-svelte";
  let minmaxValue = 5;
</script>

<Label>Min-max range</Label>
<Range id="range-minmax" min="0" max="10" bind:value={minmaxValue} />
<p>Value: {minmaxValue}</p>