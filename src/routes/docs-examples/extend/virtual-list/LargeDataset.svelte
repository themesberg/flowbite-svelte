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
    <Badge large>
      {ITEM_COUNT.toLocaleString()} items
    </Badge>
    {#if renderTime > 0}
      <span class="text-body">
        Rendered in {renderTime.toFixed(2)}ms
      </span>
    {/if}
  </div>

  <VirtualList {items} minItemHeight={45} height={500} class="rounded-lg border">
    {#snippet children(item, _index)}
      {@const record = item as Record}
      <div class="flex items-center justify-between border-b p-3 hover:bg-neutral-secondary-soft" style="height:45px">
        <span class="text-heading">{record.title}</span>
        <span class="font-mono text-sm text-body">
          ${record.value.toLocaleString()}
        </span>
      </div>
    {/snippet}
  </VirtualList>

  <p class="text-xs text-body">💡 Try scrolling through 100,000 items - notice how smooth it remains!</p>
</div>
