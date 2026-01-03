<script lang="ts">
  import { Search } from "$lib";

  let searchValue = $state("Test search");
  let emptySearchValue = $state("");
</script>

<Search bind:value={searchValue} clearable data-testid="clearable-search" />
<Search bind:value={emptySearchValue} clearable data-testid="empty-clearable-search" />
