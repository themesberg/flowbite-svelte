<script lang="ts">
  import { VirtualList } from 'flowbite-svelte';
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
</script>

<VirtualList {items}>
  {#snippet children(item, index)}
    <div>{index + 1}: {item}</div>
  {/snippet}
</VirtualList>