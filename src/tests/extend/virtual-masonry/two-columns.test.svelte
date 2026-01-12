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

<VirtualMasonry {items} columns={2} gap={12} height={500} getItemHeight={getHeight} data-testid="two-column-masonry">
  {#snippet children(item)}
    <div data-testid="two-col-item-{item.id}">{item.title}</div>
  {/snippet}
</VirtualMasonry>
