<script lang="ts">
  import { Toggle } from "$lib";

  let checked = $state(true);
</script>

<div data-testid="prechecked-toggle">
  <Toggle bind:checked>Pre-checked Toggle</Toggle>
</div>
