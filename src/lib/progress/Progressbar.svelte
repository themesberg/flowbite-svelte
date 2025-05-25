<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { progressbar } from ".";
  import type { ProgressbarProps } from "$lib/types";

  let { progress = "45", precision = 0, tweenDuration = 400, animate = false, size = "h-2.5", labelInside = false, labelOutside = "", easing = cubicOut, color = "primary", labelInsideClass, oustsideSpanClass, oustsideProgressClass, labeloutsidedivClass, divClass, ...restProps }: ProgressbarProps = $props();

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
  <div {...restProps} class={twMerge(outsideDiv(), clsx(labeloutsidedivClass))}>
    <span class={twMerge(oustsideSpan(), clsx(oustsideSpanClass))}>{labelOutside}</span>
    <span class={twMerge(outsideProgress(), clsx(oustsideProgressClass))}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={twMerge(base(), size, clsx(divClass))}>
  {#if labelInside}
    <div class={twMerge(labelInsideDiv(), size, clsx(labelInsideClass))} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={twMerge(insideDiv(), size, clsx(labelInsideClass))} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1244)
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
@prop labelInsideClass
@prop oustsideSpanClass
@prop oustsideProgressClass
@prop labeloutsidedivClass
@prop divClass
@prop ...restProps
-->
