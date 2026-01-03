<script lang="ts">
  import { Toggle } from "$lib";

  let smallChecked = $state(false);
  let defaultChecked = $state(false);
  let largeChecked = $state(false);
</script>

<div data-testid="small-toggle">
  <Toggle size="small" bind:checked={smallChecked}>Small Toggle</Toggle>
</div>

<div data-testid="default-toggle">
  <Toggle size="default" bind:checked={defaultChecked}>Default Toggle</Toggle>
</div>

<div data-testid="large-toggle">
  <Toggle size="large" bind:checked={largeChecked}>Large Toggle</Toggle>
</div>
