<script lang="ts" module>
  export const testState = $state({
    scrolledToIndex: -1
  });
  let scrollToFn: ((index: number) => void) | null = null;

  // Expose function to tests
  export function scrollTo(index: number) {
    if (scrollToFn) {
      scrollToFn(index);
      testState.scrolledToIndex = index;
    }
  }
</script>

<script lang="ts">
  import { VirtualList } from "$lib";

  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    text: `Item ${i}`
  }));

  function handleScrollToIndex(fn: (index: number) => void) {
    scrollToFn = fn;
  }
</script>

<VirtualList {items} height={400} scrollToIndex={handleScrollToIndex} data-testid="scroll-list">
  {#snippet children(item)}
    <div data-testid="scroll-item-{item.id}">{item.text}</div>
  {/snippet}
</VirtualList>
