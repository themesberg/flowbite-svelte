<script lang="ts">
  import { Select } from "$lib";

  let value = $state("");
</script>

<Select bind:value placeholder="Choose a country">
  {#snippet children()}
    <option value="us">United States</option>
    <option value="ca">Canada</option>
    <option value="mx">Mexico</option>
  {/snippet}
</Select>
