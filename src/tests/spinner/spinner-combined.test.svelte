<script lang="ts">
  import Spinner from "$lib/spinner/Spinner.svelte";
</script>

<div>
  <Spinner type="dots" color="blue" size="10" data-testid="combined-1-spinner" />
  <Spinner type="bars" color="green" size="12" data-testid="combined-2-spinner" />
  <Spinner type="pulse" color="red" size="16" data-testid="combined-3-spinner" />
  <Spinner type="orbit" color="purple" size="8" data-testid="combined-4-spinner" />
</div>
