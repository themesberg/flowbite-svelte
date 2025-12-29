<script lang="ts">
  import { Input } from "$lib";
  
  let value1 = $state("Clearable text");
  let value2 = $state("");
</script>

<div>
  <Input bind:value={value1} clearable data-testid="clearable-input" />
  <Input bind:value={value2} clearable data-testid="empty-clearable-input" />
</div>
