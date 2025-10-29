<script lang="ts">
  import type { ProgressbarProps } from "$lib/types";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { progressbar } from "./theme";
  import { getTheme } from "$lib/theme/themeUtils";

  let {
    progress = "45",
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = "h-2.5",
    labelInside = false,
    labelOutside = "",
    easing = cubicOut,
    color = "primary",
    class: className,
    classes,
    ...restProps
  }: ProgressbarProps = $props();

  const theme = getTheme("progressbar");

  let _progress = new Tween(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  const {
    base,
    label: labelInsideCls,
    inside,
    outside,
    span,
    progressCls
  } = $derived(
    progressbar({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div {...restProps} class={outside({ class: clsx(theme?.outside, classes?.outside) })}>
    <span class={span({ class: clsx(theme?.span, classes?.span) })}>{labelOutside}</span>
    <span class={progressCls({ class: clsx(theme?.progressCls, classes?.progressCls) })}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={base({ class: clsx(size, theme?.base, className) })}>
  {#if labelInside}
    <div class={labelInsideCls({ class: clsx(size, theme?.label, classes?.label) })} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={inside({ class: clsx(size, theme?.inside, classes?.label) })} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1215)
## Props
@prop progress = "45"
@prop precision = 0
@prop tweenDuration = 400
@prop animate = false
@prop size = "h-2.5"
@prop labelInside = false
@prop labelOutside = ""
@prop easing = cubicOut
@prop color = "primary"
@prop class: className
@prop classes
@prop ...restProps
-->
