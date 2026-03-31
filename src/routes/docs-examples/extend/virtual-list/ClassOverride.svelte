<script lang="ts">
  import { VirtualList } from "flowbite-svelte";
  const items = Array.from({ length: 5000 }, (_, i) => `Item ${i + 1}`);
</script>

<VirtualList {items} classes={{ item: "[contain:layout_style_paint] h-12" }}>
  {#snippet children(item, index)}
    <div class="p-3 text-heading hover:bg-neutral-secondary-soft">
      {index + 1}: {item}
    </div>
  {/snippet}
</VirtualList>
