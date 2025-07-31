<script>
  import { Label, Input } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<div class="mb-6">
  <Label for="input-group-1" class="mb-2 block">Your Email</Label>
  <Input id="email" type="email" placeholder="name@flowbite.com" class="pl-8">
    {#snippet left()}
      <EnvelopeSolid class="h-5 w-5 text-gray-500 dark:text-gray-400" />
    {/snippet}
  </Input>
</div>