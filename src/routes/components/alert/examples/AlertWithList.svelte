<script lang="ts">
  import { Alert } from '$lib';
  import { InfoCircleSolid } from 'flowbite-svelte-icons';
</script>

<div class="mb-4">
  <Alert color="blue" class="!items-start">
    {#snippet icon()}
      <InfoCircleSolid class="h-5 w-5" />
    {/snippet}
    <p class="font-medium">Ensure that these requirements are met:</p>
    <ul class="ms-4 mt-1.5 list-inside list-disc">
      <li>At least 10 characters (and up to 100 characters)</li>
      <li>At least one lowercase character</li>
      <li>Inclusion of at least one special character, e.g., ! @ # ?</li>
    </ul>
  </Alert>
</div>
