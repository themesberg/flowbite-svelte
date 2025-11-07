<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
</script>

<VirtualList {items}>
  {#snippet children(item, index)}
    <div class="border-b p-3 text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-gray-800">{index + 1}: {item}</div>
  {/snippet}
</VirtualList>
