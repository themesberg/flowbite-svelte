<script lang="ts" generics="T">
  import type { VirtualMasonryProps } from "$lib/types";
  import { virtualMasonry } from "./theme";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    items = [],
    columns = 3,
    gap = 16,
    height = 600,
    overscan = 200,
    getItemHeight,
    scrollToIndex,
    children,
    ariaLabel = "Virtual masonry grid",
    class: className,
    classes,
    contained = false
  }: VirtualMasonryProps<T> = $props();

  const theme = getTheme("virtualMasonry");

  let container: HTMLDivElement | undefined;
  let containerWidth = $state(0);
  let scrollTop = $state(0);
  let rafId: number | undefined;

  const styles = $derived(virtualMasonry({ contained }));

  const containStyle = $derived.by(() => {
    if (!contained) return "";
    const itemClasses = clsx(classes?.item);
    const hasCustomContain = /\[contain:[^\]]+\]/.test(itemClasses);
    return hasCustomContain ? "" : "contain: layout style paint;";
  });

  // Calculate column width based on container width
  const columnWidth = $derived.by(() => {
    if (containerWidth === 0) return 0;
    return (containerWidth - gap * (columns - 1)) / columns;
  });

  // Position items in columns
  interface PositionedItem {
    item: T;
    index: number;
    x: number;
    y: number;
    height: number;
    column: number;
  }

  const positionedItems = $derived.by((): PositionedItem[] => {
    if (columnWidth === 0) return [];

    const columnHeights = new Array(columns).fill(0);
    const positioned: PositionedItem[] = [];

    for (let i = 0; i < items.length; i++) {
      // Find shortest column
      const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
      const itemHeight = getItemHeight ? getItemHeight(items[i], i) : 200;

      positioned.push({
        item: items[i],
        index: i,
        x: shortestColumn * (columnWidth + gap),
        y: columnHeights[shortestColumn],
        height: itemHeight,
        column: shortestColumn
      });

      columnHeights[shortestColumn] += itemHeight + gap;
    }

    return positioned;
  });

  // Total height is the tallest column
  const totalHeight = $derived.by(() => {
    if (positionedItems.length === 0) return 0;
    return Math.max(...positionedItems.map((item) => item.y + item.height));
  });

  // Visible items based on scroll position with overscan
  const visibleItems = $derived.by(() => {
    const viewportTop = scrollTop - overscan;
    const viewportBottom = scrollTop + height + overscan;

    return positionedItems.filter((item) => {
      const itemTop = item.y;
      const itemBottom = item.y + item.height;
      return itemBottom >= viewportTop && itemTop <= viewportBottom;
    });
  });

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
    const item = positionedItems[index];
    if (item) {
      container.scrollTop = item.y;
    }
  }

  // Bind scrollToIndex function to parent component
  $effect(() => {
    if (scrollToIndex) {
      scrollToIndex(scrollToIndexImpl);
    }
  });

  // Measure container width on mount and resize
  $effect(() => {
    if (!container) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        containerWidth = entry.contentRect.width;
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
      if (rafId) cancelAnimationFrame(rafId);
    };
  });
</script>

<div
  bind:this={container}
  onscroll={handleScroll}
  role="list"
  aria-label={ariaLabel}
  class={styles.container({ class: clsx(theme?.container, className) })}
  style={`height:${height}px; position:relative;`}
>
  <div class={styles.spacer({ class: clsx(theme?.spacer, classes?.spacer) })} style={`height:${totalHeight}px;`}>
    <div class={styles.content({ class: clsx(theme?.content, classes?.content) })}>
      {#each visibleItems as { item, index, x, y, height: itemHeight } (index)}
        <div
          role="listitem"
          aria-setsize={items.length}
          aria-posinset={index + 1}
          class={styles.item({ class: clsx(theme?.item, classes?.item) })}
          style={`position:absolute; left:${x}px; top:${y}px; width:${columnWidth}px; height:${itemHeight}px; ${containStyle}`}
        >
          {@render children?.(item, index)}
        </div>
      {/each}
    </div>
  </div>
</div>

<!--
@component
VirtualMasonry - Virtualized masonry/pinterest layout for efficient rendering of large image grids
[Go to docs](https://flowbite-svelte.com/)
## Type
[VirtualMasonryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts)
## Props
@prop items = []
@prop columns = 3
@prop gap = 16
@prop height = 600
@prop overscan = 200
@prop getItemHeight
@prop scrollToIndex
@prop children
@prop ariaLabel = "Virtual masonry grid"
@prop contained = false
@prop class: className
@prop classes
-->
