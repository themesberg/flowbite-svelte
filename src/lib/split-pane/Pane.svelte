<script lang="ts">
  import type { PaneProps } from "$lib/types";
  import { getSplitPaneContext } from "$lib/context";
  import Divider from "./Divider.svelte";
  import { pane } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let { children, class: className = "", style = "" }: PaneProps = $props();

  const theme = $derived(getTheme("pane"));

  const context = getSplitPaneContext();
  const paneIndex = context ? context.registerPane() : 0;

  const paneStyle = $derived.by(() => {
    const styles = [style];
    if (context) {
      const contextStyle = context.getPaneStyle(paneIndex);
      styles.push(contextStyle);
    }
    return styles.filter(Boolean).join("; ");
  });

  const showDivider = $derived(context?.shouldRenderDivider(paneIndex) ?? false);
  const direction = $derived(context?.getDirection() ?? "horizontal");
  const isDragging = $derived(context?.getIsDragging() ?? false);
</script>

<div class={pane({ class: clsx(theme, className) })} style={paneStyle}>
  {@render children?.()}
</div>

{#if showDivider && context}
  <Divider
    {direction}
    index={paneIndex}
    {isDragging}
    currentSize={context.getPaneSize(paneIndex)}
    onMouseDown={context.onMouseDown}
    onTouchStart={context.onTouchStart}
    onKeyDown={context.onKeyDown}
  />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[PaneProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2193)
## Props
@prop children
@prop class: className = ""
@prop style = ""
-->
