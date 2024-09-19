<script lang="ts">
  import { Label, Select } from '$lib';

  interface Country {
    value: string;
    name: string;
    href?: string;
  }
  interface State {
    value: string;
    name: string;
  }

  let countries: Country[] = [
    { value: 'us', name: 'United States', href: '/' },
    { value: 'ca', name: 'Canada', href: '/' },
    { value: 'fr', name: 'France', href: '/' }
  ];
  let customSelected: State | undefined = $state();
</script>

<div class="h-36">
  <Label for="countries">Select an option</Label>
  <Select id="countries" class="mt-2" bind:value={customSelected} placeholder="">
    <option selected value="all">All</option>
    {#each countries as { value, name }}
      <option {value}>{name}</option>
    {/each}
  </Select>
</div>
