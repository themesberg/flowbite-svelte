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

  let _progress = $derived(
    new Tween(0, {
      duration: animate ? tweenDuration : 0,
      easing
    })
  );
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

  const outsideCls = $derived(outside({ class: clsx(getTheme("progressbar")?.outside, classes?.outside) }));
  const spanCls = $derived(span({ class: clsx(getTheme("progressbar")?.span, classes?.span) }));
  const progressClsFull = $derived(progressCls({ class: clsx(getTheme("progressbar")?.progressCls, classes?.progressCls) }));
  const baseCls = $derived(base({ class: clsx(size, getTheme("progressbar")?.base, className) }));
  const labelInsideClsFull = $derived(labelInsideCls({ class: clsx(size, getTheme("progressbar")?.label, classes?.label) }));
  const insideCls = $derived(inside({ class: clsx(size, getTheme("progressbar")?.inside, classes?.label) }));

  $effect(() => {
    _progress.set(Number(progress));
  });
</script>

{#if labelOutside}
  <div {...restProps} class={outsideCls}>
    <span class={spanCls}>{labelOutside}</span>
    <span class={progressClsFull}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={baseCls}>
  {#if labelInside}
    <div class={labelInsideClsFull} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={insideCls} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1316)
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
