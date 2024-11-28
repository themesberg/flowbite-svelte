<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { twMerge } from "tailwind-merge";
  import { tweened } from "svelte/motion";
  import { type ProgressbarProps as Props, progressbar } from ".";

  let { progress = "45", precision = 0, tweenDuration = 400, animate = false, size = "h-2.5", labelInside = false, labelOutside = "", easing = cubicOut, color = "primary", div2Class, oustsideSpanClass, oustsideProgressClass, labeloutsidedivClass, divClass, ...restProps }: Props = $props();

  const _progress = tweened(0, {
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
    <div class={twMerge(labelInsideDiv({ class: div2Class }), size)} style="width: {$_progress}%">
      {$_progress.toFixed(precision)}%
    </div>
  {:else}
    <div class={twMerge(insideDiv({ class: div2Class }), size)} style="width: {$_progress}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://preview.flowbite-svelte.com/)
## Props
@props: progress: any = "45";
@props:precision: any = 0;
@props:tweenDuration: any = 400;
@props:animate: any = false;
@props:size: any = "h-2.5";
@props:labelInside: any = false;
@props:labelOutside: any = "";
@props:easing: any = cubicOut;
@props:color: any = "primary";
@props:div2Class: any;
@props:oustsideSpanClass: any;
@props:oustsideProgressClass: any;
@props:labeloutsidedivClass: any;
@props:divClass: any;
-->
