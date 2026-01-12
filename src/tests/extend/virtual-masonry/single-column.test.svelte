<script lang="ts">
  import { VirtualMasonry } from "$lib";

  const items = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    title: `Item ${i}`,
    height: 200 + (i % 3) * 50 // Heights: 200, 250, 300
  }));

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualMasonry {items} columns={1} gap={16} height={600} getItemHeight={getHeight} data-testid="single-column-masonry">
  {#snippet children(item)}
    <div data-testid="single-col-item-{item.id}" style="height: 100%;">
      {item.title}
    </div>
  {/snippet}
</VirtualMasonry>
