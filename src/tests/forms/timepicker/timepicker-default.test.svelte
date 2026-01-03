<script lang="ts">
  import { Timepicker } from "$lib";

  let value = $state("12:00");
</script>

<div data-testid="default-timepicker">
  <Timepicker id="default-test" bind:value />
</div>
