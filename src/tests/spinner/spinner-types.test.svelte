<script lang="ts">
  import Spinner from "$lib/spinner/Spinner.svelte";
</script>

<div>
  <Spinner type="default" data-testid="default-spinner" />
  <Spinner type="dots" data-testid="dots-spinner" />
  <Spinner type="bars" data-testid="bars-spinner" />
  <Spinner type="pulse" data-testid="pulse-spinner" />
  <Spinner type="orbit" data-testid="orbit-spinner" />
</div>
