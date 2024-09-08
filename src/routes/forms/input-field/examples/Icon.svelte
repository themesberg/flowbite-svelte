<script lang="ts">
  import { Input, Label, CloseButton } from '$lib';
  import { EnvelopeSolid } from 'flowbite-svelte-icons';
</script>

<Label class="mb-4 space-y-2">
  <span>Small input - left icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="sm" class="pl-8">
    {#snippet left()}
      <EnvelopeSolid class="h-4 w-4" />
    {/snippet}
  </Input>
</Label>

<Label class="mb-4 space-y-2">
  <span>Default input - right icon</span>
  <Input type="email" placeholder="name@flowbite.com" size="md">
    {#snippet right()}
      <EnvelopeSolid class="h-5 w-5" />
    {/snippet}
  </Input>
</Label>

<Label class="space-y-2">
  <span>Large input - both icons</span>
  <Input type="email" placeholder="name@flowbite.com" size="lg" class="pl-10">
    {#snippet left()}
      <EnvelopeSolid class="h-6 w-6" />
    {/snippet}
    {#snippet right()}
      <CloseButton />
    {/snippet}
  </Input>
</Label>
