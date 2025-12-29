<script lang="ts">
  import { Input } from "$lib";
  
  let inputValue = $state("Initial value");
</script>

<div>
  <Input bind:value={inputValue} data-testid="bound-input" />
  <div data-testid="display-value">{inputValue}</div>
</div>
