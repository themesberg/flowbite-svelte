<script lang="ts" module>
  export const testState = $state({
    scrolledToIndex: -1
  });

  let scrollToFn: ((index: number) => void) | null = null;

  export function scrollTo(index: number) {
    if (scrollToFn) {
      scrollToFn(index);
      testState.scrolledToIndex = index;
    }
  }
</script>

<script lang="ts">
  import { VirtualMasonry } from "$lib";

  const items = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    title: `Item ${i}`,
    height: 200
  }));

  function handleScrollToIndex(fn: (index: number) => void) {
    scrollToFn = fn;
  }

  function getHeight(item: (typeof items)[0]) {
    return item.height;
  }
</script>

<VirtualMasonry {items} columns={3} gap={16} height={600} getItemHeight={getHeight} scrollToIndex={handleScrollToIndex} data-testid="scroll-masonry">
  {#snippet children(item)}
    <div data-testid="scroll-masonry-item-{item.id}">{item.title}</div>
  {/snippet}
</VirtualMasonry>
