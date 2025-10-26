<script lang="ts">
  import type { VirtualListProps } from "$lib/types";
  import { virtualList } from "./theme";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  // Destructure props with defaults
  let {
    items = [],
    minItemHeight = 50,
    height = 400,
    overscan = 5,
    getItemHeight,
    scrollToIndex, // Bind function to parent
    children,
    class: className,
    classes
  }: VirtualListProps = $props();

  const theme = getTheme("virtualList");

  let container: HTMLDivElement | undefined;
  let scrollTop = $state(0);
  let rafId: number | undefined;

  const styles = virtualList();

  // Total height of all items
  const totalHeight = $derived.by(() => items.reduce((sum: number, item, i) => sum + (getItemHeight ? getItemHeight(item, i) : (minItemHeight ?? 50)), 0));

  // Find the first visible index
  const startIndex = $derived.by(() => {
    let y = 0;
    for (let i = 0; i < items.length; i++) {
      const h = getItemHeight ? getItemHeight(items[i], i) : (minItemHeight ?? 50);
      if (y + h > scrollTop) return Math.max(0, i - overscan);
      y += h;
    }
    return 0;
  });

  // Find the last visible index
  const endIndex = $derived.by(() => {
    let y = 0;
    for (let i = 0; i < items.length; i++) {
      const h = getItemHeight ? getItemHeight(items[i], i) : (minItemHeight ?? 50);
      y += h;
      if (y >= scrollTop + height) return Math.min(items.length, i + overscan + 1);
    }
    return items.length;
  });

  // Items currently rendered
  const visibleItems = $derived.by(() => items.slice(startIndex, endIndex));

  // Offset of the first visible item
  const offsetY = $derived.by(() => items.slice(0, startIndex).reduce((sum: number, item, i) => sum + (getItemHeight ? getItemHeight(item, i) : (minItemHeight ?? 50)), 0));

  // Performance optimized scroll handler using RAF
  function handleScroll() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(() => {
      if (container) scrollTop = container.scrollTop;
    });
  }

  // Scroll to specific index
  function scrollToIndexImpl(index: number) {
    if (!container || index < 0 || index >= items.length) return;

    let y = 0;
    for (let i = 0; i < index; i++) {
      y += getItemHeight ? getItemHeight(items[i], i) : (minItemHeight ?? 50);
    }
    container.scrollTop = y;
  }

  // Bind scrollToIndex function to parent component
  $effect(() => {
    if (scrollToIndex) {
      scrollToIndex(scrollToIndexImpl);
    }
  });

  // Cleanup RAF on unmount
  $effect(() => {
    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  });
</script>

<div bind:this={container} onscroll={handleScroll} role="list" aria-label="Virtual scrolling list" class={styles.container({ class: clsx(theme?.container, className) })} style={`height:${height}px; position:relative;`}>
  <div class={styles.spacer({ class: clsx(theme?.spacer, classes?.spacer) })} style={`height:${totalHeight}px;`}>
    <div class={styles.content({ class: clsx(theme?.content, classes?.content) })} style={`transform:translateY(${offsetY}px); will-change:transform;`}>
      {#each visibleItems as item, i (startIndex + i)}
        {@render children?.(item, startIndex + i)}
      {/each}
    </div>
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[VirtualListProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2048)
## Props
@prop items = []
@prop minItemHeight = 50
@prop height = 400
@prop overscan = 5
@prop getItemHeight
@prop scrollToIndex
@prop children
@prop class: className
@prop classes
-->
