<script lang="ts">
  import { Search, Button } from "$lib";
</script>

<Search data-testid="search-with-icon">
  {#snippet children()}
    <Button size="sm" data-testid="search-button">Search</Button>
  {/snippet}
</Search>
