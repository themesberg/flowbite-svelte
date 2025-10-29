<script lang="ts" generics="T">
  import type { VirtualListProps } from "$lib/types";
  import { virtualList } from "./theme";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    items = [],
    minItemHeight = 50,
    height = 400,
    overscan = 5,
    getItemHeight,
    scrollToIndex, // Bind function to parent
    children,
    contained = false,
    class: className,
    classes
  }: VirtualListProps<T> = $props();

  const theme = getTheme("virtualList");

  let container: HTMLDivElement | undefined;
  let scrollTop = $state(0);
  let rafId: number | undefined;

  const styles = virtualList({ contained });

  const containStyle = $derived(() => {
    if (!contained) return "";
    const itemClasses = (classes?.item ?? "").toString();
    const hasCustomContain = itemClasses.includes("[contain:");
    return hasCustomContain ? "" : "contain: layout style paint;";
  });

  // Total height of all items
  const totalHeight = $derived.by(() => items.reduce((sum: number, item, i) => sum + (getItemHeight ? getItemHeight(item, i) : (minItemHeight ?? 50)), 0));

  // Sanitize once and use the safe value in index calculations.
  const overscanSafe = Math.max(0, Math.floor(overscan ?? 0));
  // Find the first visible index
  const startIndex = $derived.by(() => {
    let y = 0;
    for (let i = 0; i < items.length; i++) {
      const h = getItemHeight ? getItemHeight(items[i], i) : (minItemHeight ?? 50);
      if (y + h > scrollTop) return Math.max(0, i - overscanSafe);
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
      if (y >= scrollTop + height) return Math.min(items.length, i + overscanSafe + 1);
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
         <div 
          role="listitem"
          class={styles.item({ class: clsx(theme?.item, classes?.item) })}
          style={containStyle}
        >
          {@render children?.(item, startIndex + i)}
        </div>
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
