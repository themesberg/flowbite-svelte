<script lang="ts">
  import { Timepicker } from "$lib";

  let value = $state("09:00");

  const timeIntervals = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00"];
</script>

<div data-testid="inline-timepicker">
  <Timepicker id="inline-test" type="inline-buttons" bind:value {timeIntervals} columns={3} />
</div>
