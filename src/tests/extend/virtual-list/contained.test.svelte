<script lang="ts">
  import { VirtualList } from "$lib";

  const items = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
</script>

<VirtualList {items} height={400} contained={true} data-testid="contained-list">
  {#snippet children(item)}
    <div data-testid="contained-item-{item.id}">{item.text}</div>
  {/snippet}
</VirtualList>
