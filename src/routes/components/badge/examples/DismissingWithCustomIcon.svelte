<script lang="ts">
  import { Badge } from '$lib';
  import { CheckCircleOutline } from 'flowbite-svelte-icons';
</script>

<div class="flex h-8 justify-center">
  <Badge dismissable>
    Default
    {#snippet icon()}
      <CheckCircleOutline class="h-5 w-5" />
    {/snippet}
  </Badge>
</div>
