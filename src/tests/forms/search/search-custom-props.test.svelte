<script lang="ts">
  import { Search } from "$lib";
</script>

<Search placeholder="Custom placeholder" data-testid="custom-placeholder-search" />
<Search class="custom-search-class" data-testid="custom-class-search" id="custom-search-id" />
<Search classes={{ input: "custom-input-class" }} data-testid="custom-input-class-search" />
<Search name="search-field" data-testid="named-search" />
