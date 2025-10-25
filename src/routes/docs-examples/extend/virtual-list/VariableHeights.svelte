<!-- VariableHeights.svelte -->
<script lang="ts">
  import { VirtualList } from "flowbite-svelte";

  interface Item {
    title: string;
    description: string;
    type: "small" | "medium" | "large";
  }

  const items: Item[] = Array.from({ length: 1000 }, (_, i) => {
    const types: Array<"small" | "medium" | "large"> = ["small", "medium", "large"];
    const type = types[i % 3];
    return {
      title: `Item ${i + 1}`,
      description: type === "small" ? "Short description" : type === "medium" ? "Medium length description with more details about this item" : "Large description with lots of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This item has much more information to display and takes up more vertical space.",
      type
    };
  });

  function getItemHeight(item: unknown): number {
    const typedItem = item as Item;
    return typedItem.type === "small" ? 100 : typedItem.type === "medium" ? 90 : 130;
  }
</script>

<VirtualList {items} minItemHeight={100} {getItemHeight} height={400}>
  {#snippet children(item, index)}
    {@const typedItem = item as Item}
    <div class="border-b p-3 hover:bg-gray-50 dark:hover:bg-gray-800" style="height:{getItemHeight(typedItem)}px">
      <div class="font-semibold text-gray-900 dark:text-white">{typedItem.title}</div>
      <div class="mt-1 text-sm text-gray-600 dark:text-gray-400">{typedItem.description}</div>
      <div class="mt-1 text-xs text-gray-500">Height: {getItemHeight(typedItem)}px</div>
    </div>
  {/snippet}
</VirtualList>
