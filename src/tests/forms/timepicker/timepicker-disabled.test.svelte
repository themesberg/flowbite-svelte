<script lang="ts">
  import { Timepicker } from "$lib";

  let value = $state("14:00");
</script>

<div data-testid="disabled-timepicker">
  <Timepicker id="disabled-test" bind:value disabled />
</div>
