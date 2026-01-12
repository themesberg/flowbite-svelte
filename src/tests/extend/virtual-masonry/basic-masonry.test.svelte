<script lang="ts">
  import { VirtualMasonry } from "$lib";

  const items = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    title: `Item ${i}`,
    height: 150 + (i % 5) * 50 // Heights: 150, 200, 250, 300, 350
  }));

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualMasonry {items} columns={3} gap={16} height={600} getItemHeight={getHeight} data-testid="basic-masonry">
  {#snippet children(item)}
    <div data-testid="masonry-item-{item.id}" style="height: 100%;">
      {item.title}
    </div>
  {/snippet}
</VirtualMasonry>
