<script lang="ts">
  import { Timepicker } from "$lib";

  let value = $state("12:00");
</script>

<div data-testid="minmax-timepicker">
  <Timepicker id="minmax-test" bind:value min="08:00" max="18:00" />
</div>
