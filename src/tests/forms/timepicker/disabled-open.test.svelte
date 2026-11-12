<script lang="ts">
  import Timepicker from "$lib/forms/timepicker/Timepicker.svelte";

  let { type }: { type: "dropdown" | "timerange-dropdown" } = $props();
  let disabled = $state(false);
  let updates = $state(0);
  const options = [{ name: "Orange", value: "orange" }];
</script>

<svelte:window
  onkeydown={(event) => {
    if (event.key === "F8") disabled = true;
  }}
/>

<Timepicker {type} {options} {disabled} value="09:30" endValue="10:30" onselect={() => updates++} />
<output>{updates}</output>
