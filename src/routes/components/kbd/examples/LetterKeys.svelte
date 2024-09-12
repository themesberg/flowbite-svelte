<script lang="ts">
  import { Kbd, Input } from '$lib';
  let letter = $state('');
</script>

<div class="space-y-4">
  <Kbd class="px-2 py-1.5">{letter === '' ? 'Type a letter' : letter}</Kbd>
  <Input bind:value={letter} placeholder="Type a letter" />
</div>
