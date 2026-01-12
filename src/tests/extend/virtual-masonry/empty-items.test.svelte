<script lang="ts">
  import { VirtualMasonry } from "$lib";

  const items: Array<{ id: number; title: string; height: number }> = [];

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualMasonry {items} columns={3} gap={16} height={600} getItemHeight={getHeight} data-testid="empty-masonry">
  {#snippet children(item)}
    <div data-testid="masonry-item-{item.id}" style="height: 100%;">
      {item.title}
    </div>
  {/snippet}
</VirtualMasonry>
