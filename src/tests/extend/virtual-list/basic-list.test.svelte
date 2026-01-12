<script lang="ts">
  import { VirtualList } from "$lib";

  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
</script>

<VirtualList {items} height={400} data-testid="basic-list">
  {#snippet children(item)}
    <div data-testid="list-item-{item.id}">{item.text}</div>
  {/snippet}
</VirtualList>
