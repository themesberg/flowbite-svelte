<script lang="ts">
  import { Timepicker } from "$lib";

  let startValue = $state("09:00");
  let endValue = $state("17:00");
</script>

<div data-testid="range-timepicker">
  <Timepicker id="range-test" endId="range-test-end" type="range" bind:value={startValue} bind:endValue />
</div>
