<script lang="ts">
  import { Toggle } from "$lib";

  let checked = $state(false);
</script>

<div data-testid="value-toggle">
  <Toggle bind:checked value="newsletter">Subscribe to Newsletter</Toggle>
</div>
