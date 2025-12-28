<script lang="ts">
  import Spinner from "$lib/spinner/Spinner.svelte";
</script>

<div>
  <Spinner currentFill="#FF5733" currentColor="#333333" data-testid="custom-fill-spinner" />
  <Spinner class="custom-class" data-testid="custom-class-spinner" />
  <Spinner aria-label="Loading content" data-testid="custom-aria-spinner" />
</div>
