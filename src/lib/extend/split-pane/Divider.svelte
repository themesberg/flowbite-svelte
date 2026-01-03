<script lang="ts">
  import type { DividerProps } from "$lib/types";
  import { divider } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { nonPassiveTouch } from "$lib/utils/nonPassiveTouch";

  let { direction, index, onMouseDown, onTouchStart, onKeyDown, isDragging, currentSize, class: className = "" }: DividerProps = $props();

  const theme = $derived(getTheme("divider"));

  const { base, hitArea } = $derived(divider({ direction, isDragging }));

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
  class={base({ class: clsx(theme?.base, className) })}
  data-scope="divider"
  data-part="base"
  onmousedown={(e) => onMouseDown(e, index)}
  use:nonPassiveTouch={(e) => onTouchStart(e, index)}
  onkeydown={(e) => onKeyDown(e, index)}
>
  <div class={hitArea({ class: clsx(theme?.hitArea) })} data-part="hit-area"></div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2077)
## Props
@prop direction
@prop index
@prop onMouseDown
@prop onTouchStart
@prop onKeyDown
@prop isDragging
@prop currentSize
@prop class: className = ""
-->
