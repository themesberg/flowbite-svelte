<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { twMerge } from "tailwind-merge";
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
  <div {...restProps} class={outsideDiv({ class: labeloutsidedivClass })}>
    <span class={oustsideSpan({ class: oustsideSpanClass })}>{labelOutside}</span>
    <span class={outsideProgress({ class: oustsideProgressClass })}>{progress}%</span>
  </div>
{/if}
<div {...restProps} class={twMerge(base({ class: divClass }), size)}>
  {#if labelInside}
    <div class={twMerge(labelInsideDiv({ class: labelInsideClass }), size)} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div class={twMerge(insideDiv({ class: labelInsideClass }), size)} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1119)
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
