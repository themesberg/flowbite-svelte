<Label for="countries">Select an option</Label>
<Select id="countries" class="mt-2" bind:value={customSelected} placeholder="">
  <option selected value="all">All</option>
  {#each countries as { value, name }}
    <option {value}>{name}</option>
  {/each}
</Select>