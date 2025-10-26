<!-- LargeDataset.svelte -->
<script lang="ts">
  import { VirtualList, Badge } from "flowbite-svelte";

  interface Record {
    id: number;
    title: string;
    value: number;
  }

  const ITEM_COUNT = 100000;
  const items: Record[] = Array.from({ length: ITEM_COUNT }, (_, i) => ({
    id: i + 1,
    title: `Record ${i + 1}`,
    value: Math.floor(Math.random() * 10000)
  }));

  let renderTime = $state(0);
  let startTime: number;

  function measureRenderStart() {
    startTime = performance.now();
  }

  function measureRenderEnd() {
    renderTime = performance.now() - startTime;
  }

  $effect(() => {
    measureRenderStart();
    return () => measureRenderEnd();
  });
</script>

<div class="space-y-4">
  <div class="flex items-center gap-4 text-sm">
    <Badge large color="blue">
      {ITEM_COUNT.toLocaleString()} items
    </Badge>
    {#if renderTime > 0}
      <span class="text-gray-600 dark:text-gray-400">
        Rendered in {renderTime.toFixed(2)}ms
      </span>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={45} height={500} class="rounded-lg border">
    {#snippet children(item, _index)}
      {@const record = item as Record}
      <div class="flex items-center justify-between border-b p-3 hover:bg-gray-50 dark:hover:bg-gray-800" style="height:45px">
        <span class="text-gray-900 dark:text-white">{record.title}</span>
        <span class="font-mono text-sm text-gray-600 dark:text-gray-400">
          ${record.value.toLocaleString()}
        </span>
      </div>
    {/snippet}
  </VirtualList>

  <p class="text-xs text-gray-500 dark:text-gray-400">💡 Try scrolling through 100,000 items - notice how smooth it remains!</p>
</div>
