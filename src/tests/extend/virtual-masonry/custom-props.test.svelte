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

<VirtualMasonry {items} columns={3} gap={20} height={600} overscan={300} getItemHeight={getHeight} classes={{ item: "custom-masonry-item" }} class="custom-masonry-base" data-testid="custom-masonry">
  {#snippet children(item)}
    <div data-testid="custom-masonry-item-{item.id}">{item.title}</div>
  {/snippet}
</VirtualMasonry>
