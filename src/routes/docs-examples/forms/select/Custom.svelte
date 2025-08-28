<script lang="ts">
  import { Select, Label } from "flowbite-svelte";
  let selected = $state();
  let countries = [
    { value: "us", name: "United States" },
    { value: "ca", name: "Canada" },
    { value: "fr", name: "France" }
  ];
</script>

<Label for="countries">Select an option</Label>
<Select id="countries" class="mt-2" bind:value={selected} placeholder="">
  <option selected value="all">All</option>

  {#each countries as { value, name }}
    <option {value}>{name}</option>
  {/each}
</Select>
