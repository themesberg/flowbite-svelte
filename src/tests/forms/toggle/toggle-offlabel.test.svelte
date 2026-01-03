<script lang="ts">
  import { Toggle } from "$lib";

  let checked = $state(false);
</script>

<div data-testid="offlabel-toggle">
  <Toggle bind:checked>
    {#snippet offLabel()}
      <span data-testid="off-label">Off State Label</span>
    {/snippet}
    On State Label
  </Toggle>
</div>
