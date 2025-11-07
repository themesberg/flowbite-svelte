<script lang="ts">
  import type { DividerProps } from "$lib/types";
  import { divider, dividerHitArea } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";

  let { direction, index, onMouseDown, onTouchStart, onKeyDown, isDragging, currentSize, class: className = "" }: DividerProps = $props();

  const themePane = getTheme("divider");
  const themeDividerHitArea = getTheme("dividerHitArea");

  const isHorizontal = $derived(direction === "horizontal");
  const roundedSize = $derived(Math.round(currentSize));
</script>

<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<div
  role="separator"
  tabindex="0"
  aria-orientation={isHorizontal ? "vertical" : "horizontal"}
  aria-label={`Resize ${isHorizontal ? "horizontal" : "vertical"} panes`}
  aria-valuenow={roundedSize}
  aria-valuemin="0"
  aria-valuemax="100"
  aria-valuetext={`${roundedSize} percent`}
  class={divider({ direction, isDragging, class: clsx(themePane, className) })}
  onmousedown={(e) => onMouseDown(e, index)}
  ontouchstart={(e) => onTouchStart(e, index)}
  onkeydown={(e) => onKeyDown(e, index)}
>
  <div class={dividerHitArea({ direction, class: clsx(themeDividerHitArea, className) })}></div>
</div>