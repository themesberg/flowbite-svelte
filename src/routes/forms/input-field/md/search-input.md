<form>
  <Label for="search" class="mb-2 block">Your Email</Label>
  <Input id="search" placeholder="Search" size="lg" class="pl-10">
    {#snippet left()}
      <SearchOutline class="h-6 w-6 text-gray-500 dark:text-gray-400" />
    {/snippet}
    {#snippet right()}
      <Button size="sm" type="submit">Search</Button>
    {/snippet}
  </Input>
</form>