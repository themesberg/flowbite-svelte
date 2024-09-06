<script lang="ts">
  import { Alert, Button } from '$lib';
  import { InfoCircleSolid, EyeSolid } from 'flowbite-svelte-icons';
</script>

<div class="mb-4">
  <Alert color="lime">
    <div class="flex items-center gap-3">
      {#snippet icon()}
        <InfoCircleSolid class="h-5 w-5" />
      {/snippet}
      <span class="text-lg font-medium">This is a info alert</span>
    </div>
    <p class="mb-4 mt-2 text-sm">More info about this info alert goes here. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
    <div class="flex gap-2">
      <Button size="xs"><EyeSolid class="me-2 h-4 w-4" />View more</Button>
      <Button size="xs" outline>Go to Home</Button>
    </div>
  </Alert>
</div>