<script lang="ts">
  import { VirtualMasonry } from "$lib";

  const items = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    title: `Item ${i}`,
    height: 200
  }));

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualMasonry {items} columns={3} gap={16} height={600} getItemHeight={getHeight} contained={true} data-testid="contained-masonry">
  {#snippet children(item)}
    <div data-testid="contained-masonry-item-{item.id}">{item.title}</div>
  {/snippet}
</VirtualMasonry>
