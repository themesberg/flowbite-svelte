<script lang="ts">
  import { Range } from "$lib";

  let rangeValue = $state(50);
</script>

<div>
  <Range bind:value={rangeValue} data-testid="bound-range" min={0} max={100} />
  <div data-testid="display-value">{rangeValue}</div>
</div>
