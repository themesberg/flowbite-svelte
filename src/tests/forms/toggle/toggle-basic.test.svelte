<script lang="ts">
  import { Toggle } from "$lib";

  let checked = $state(false);
</script>

<div data-testid="basic-toggle">
  <Toggle bind:checked>Basic Toggle</Toggle>
</div>
