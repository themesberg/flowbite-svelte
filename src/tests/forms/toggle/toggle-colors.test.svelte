<script lang="ts">
  import { Toggle } from "$lib";

  let primaryChecked = $state(false);
  let redChecked = $state(false);
  let greenChecked = $state(false);
</script>

<div data-testid="primary-toggle">
  <Toggle color="primary" bind:checked={primaryChecked}>Primary Color</Toggle>
</div>

<div data-testid="red-toggle">
  <Toggle color="red" bind:checked={redChecked}>Red Color</Toggle>
</div>

<div data-testid="green-toggle">
  <Toggle color="green" bind:checked={greenChecked}>Green Color</Toggle>
</div>
