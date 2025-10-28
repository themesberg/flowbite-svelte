<script lang="ts">
  import { VirtualList, Button, Spinner } from "flowbite-svelte";

  let items: string[] = $state([]);
  let isLoading = $state(false);

  async function loadItems() {
    isLoading = true;
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    items = Array.from({ length: 3000 }, (_, i) => `Item ${i + 1}`);
    isLoading = false;
  }
</script>

<div class="space-y-4">
  <Button onclick={loadItems} disabled={isLoading}>
    {#if isLoading}
      <Spinner class="mr-2" size="4" />
      Loading...
    {:else}
      Load Items
    {/if}
  </Button>

  {#if items.length === 0 && !isLoading}
    <div class="rounded-lg border p-8 text-center text-gray-500 dark:text-gray-400" style="height:400px">
      <div class="mb-4 text-6xl">📋</div>
      <p class="text-lg font-medium">No items yet</p>
      <p class="text-sm">Click the button above to load items</p>
    </div>
  {:else if isLoading}
    <div class="flex items-center justify-center rounded-lg border p-8" style="height:400px">
      <div class="text-center">
        <Spinner size="12" />
        <p class="mt-4 text-gray-600 dark:text-gray-400">Loading items...</p>
      </div>
    </div>
  {:else}
    <VirtualList {items} minItemHeight={40} height={400} class="rounded-lg border">
      {#snippet children(item, index)}
        <div class="border-b p-2 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-800">
          {index + 1}: {item}
        </div>
      {/snippet}
    </VirtualList>
  {/if}
</div>
