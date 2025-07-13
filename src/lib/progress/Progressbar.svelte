<script lang="ts">
  import { cn } from "$lib";
  import type { ProgressbarProps } from "$lib/types";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { progressbar, type ProgressbarTheme } from ".";
  import { getTheme } from "$lib/theme/themeUtils";

  let { progress = "45", precision = 0, tweenDuration = 400, animate = false, size = "h-2.5", labelInside = false, labelOutside = "", easing = cubicOut, color = "primary", class: className, classes, ...restProps }: ProgressbarProps = $props();

  const theme = getTheme("progressbar");

  let _progress = new Tween(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });
  const { base, labelInsideDiv, insideDiv, outsideDiv, oustsideSpan, outsideProgress } = $derived(
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
  <div {...restProps} class={cn(outsideDiv({ class: clsx(classes?.outsideDiv) }), (theme as ProgressbarTheme)?.outsideDiv)}>
    <span class={cn(oustsideSpan({ class: clsx(classes?.oustsideSpan) }), (theme as ProgressbarTheme)?.oustsideSpan)}>{labelOutside}</span>
    <span class={cn(outsideProgress({ class: clsx(classes?.outsideProgress) }), (theme as ProgressbarTheme)?.outsideProgress)}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={cn(base({ class: clsx(size, classes?.base, className) }), (theme as ProgressbarTheme)?.base)}>
  {#if labelInside}
    <div class={cn(labelInsideDiv({ class: clsx(classes?.labelInsideDiv, size) }), (theme as ProgressbarTheme)?.labelInsideDiv)} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={cn(insideDiv({ class: clsx(classes?.labelInsideDiv, size) }), (theme as ProgressbarTheme)?.insideDiv)} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1218)
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
