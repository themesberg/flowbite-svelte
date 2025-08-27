<script>
  import { Range, Label } from "flowbite-svelte";
  let stepValue = 2.5;
</script>

<Label>Range steps</Label>
<Range id="range-steps" min="0" max="5" bind:value={stepValue} step="0.5" />
<p>Value: {stepValue}</p>
