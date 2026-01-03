<script lang="ts">
  import { Toggle } from "$lib";

  let checked = $state(false);
</script>

<div data-testid="disabled-toggle">
  <Toggle bind:checked disabled>Disabled Toggle</Toggle>
</div>
