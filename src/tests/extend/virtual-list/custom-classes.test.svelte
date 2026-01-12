<script lang="ts">
  import { VirtualList } from "$lib";

  const items = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));
</script>

<VirtualList {items} height={400} overscan={10} classes={{ item: "custom-item-class" }} class="custom-base-class" data-testid="custom-list">
  {#snippet children(item)}
    <div data-testid="custom-item-{item.id}">{item.text}</div>
  {/snippet}
</VirtualList>
