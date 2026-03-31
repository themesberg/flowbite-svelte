<script lang="ts">
  import { Input, Label, Button } from "flowbite-svelte";
  import { SearchOutline } from "flowbite-svelte-icons";
</script>

<form>
  <Label for="search" class="mb-2 block">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg" class="ps-9">
    {#snippet left()}
      <SearchOutline class="text-body h-6 w-6" />
    {/snippet}
    {#snippet right()}
      <Button size="sm" type="submit">Search</Button>
    {/snippet}
  </Input>
</form>
