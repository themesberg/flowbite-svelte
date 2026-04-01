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
      description:
        type === "small"
          ? "Short description"
          : type === "medium"
            ? "Medium length description with more details about this item"
            : "Large description with lots of content. Lorem ipsum dolor sit amet, consectetur adipiscing elit. This item has much more information to display and takes up more vertical space.",
      type
    };
  });

  function getItemHeight(item: unknown): number {
    const typedItem = item as Item;
    return typedItem.type === "small" ? 100 : typedItem.type === "medium" ? 90 : 130;
  }
</script>

<VirtualList {items} minItemHeight={100} {getItemHeight} height={400}>
  {#snippet children(item, _index)}
    {@const typedItem = item as Item}
    <div class="hover:bg-neutral-secondary-soft border-b p-3" style="height:{getItemHeight(typedItem)}px">
      <div class="text-heading font-semibold">{typedItem.title}</div>
      <div class="text-body mt-1 text-sm">{typedItem.description}</div>
      <div class="text-body mt-1 text-xs">Height: {getItemHeight(typedItem)}px</div>
    </div>
  {/snippet}
</VirtualList>
