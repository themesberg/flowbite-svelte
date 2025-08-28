<script lang="ts">
  import { Label, Input, Button, CloseButton } from "flowbite-svelte";
  import { EnvelopeSolid } from "flowbite-svelte-icons";
</script>

<Label class="space-y-2">
  <div>Small input - left icon</div>
  <Input type="email" placeholder="name@flowbite.com" size="sm" class="ps-8">
    {#snippet left()}
      <EnvelopeSolid class="h-4 w-4" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <div>Default input - right icon</div>
  <Input type="email" placeholder="name@flowbite.com" size="md" class="ps-9">
    {#snippet left()}
      <EnvelopeSolid class="h-5 w-5" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <div>Large input - both icons</div>
  <Input type="email" placeholder="name@flowbite.com" size="lg" class="ps-11">
    {#snippet left()}
      <EnvelopeSolid class="h-6 w-6" />
    {/snippet}
    {#snippet right()}
      <CloseButton />
    {/snippet}
  </Input>
</Label>
