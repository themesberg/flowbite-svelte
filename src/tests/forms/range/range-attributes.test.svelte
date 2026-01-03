<script lang="ts">
  import { Range } from "$lib";
</script>

<Range min={0} max={100} data-testid="min-max-range" />
<Range min={0} max={100} step={5} data-testid="step-range" />
<Range min={-50} max={50} data-testid="negative-range" />
<Range min={0} max={1} step={0.1} data-testid="decimal-range" />
