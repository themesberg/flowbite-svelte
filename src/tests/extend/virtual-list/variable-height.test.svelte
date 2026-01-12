<script lang="ts">
  import { VirtualList } from "$lib";

  const items = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    text: `Item ${i}`,
    height: 50 + (i % 3) * 30 // Variable heights: 50, 80, 110
  }));

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualList {items} height={400} getItemHeight={getHeight} data-testid="variable-height-list">
  {#snippet children(item)}
    <div data-testid="vh-item-{item.id}" style="height: {item.height}px;">
      {item.text}
    </div>
  {/snippet}
</VirtualList>
