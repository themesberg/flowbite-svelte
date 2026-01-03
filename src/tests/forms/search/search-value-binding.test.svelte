<script lang="ts">
  import { Search } from "$lib";

  let searchValue = $state("");
</script>

<div>
  <Search bind:value={searchValue} data-testid="bound-search" />
  <div data-testid="display-value">{searchValue || "empty"}</div>
</div>
