<script lang="ts">
  import { VirtualList, Button } from "flowbite-svelte";

  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
  let scrollToFn: ((index: number) => void) | undefined;

  function jumpToItem(index: number) {
    scrollToFn?.(index);
  }
</script>

<div class="space-y-4">
  <Button onclick={() => jumpToItem(2499)}>Jump to item 2500</Button>
  <Button onclick={() => jumpToItem(0)}>Jump to top item</Button>
  <VirtualList {items} minItemHeight={40} height={400} scrollToIndex={(fn) => (scrollToFn = fn)}>
    {#snippet children(item, index)}
      <div class="border-b p-2 text-gray-900 dark:text-white" style="height:40px; line-height:40px;">
        {index + 1}: {item}
      </div>
    {/snippet}
  </VirtualList>
</div>
