<script lang="ts">
  import { Search } from "$lib";

  let searchValue = $state("Test value");
  let callbackTriggered = $state(false);

  function handleClear() {
    callbackTriggered = true;
  }
</script>

<div>
  <Search 
    bind:value={searchValue} 
    clearable 
    clearableOnClick={handleClear}
    data-testid="callback-search" 
  />
  <div data-testid="callback-status">{callbackTriggered ? "triggered" : "not-triggered"}</div>
</div>
