<script lang="ts">
  import { progressradial } from "$lib/progress/theme";
  import type { ProgressradialProps } from "$lib/types";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";

  let { progress = 45, radius = 42, startingPosition = "top", precision = 0, tweenDuration = 400, animate = false, size = "h-24 w-24", thickness = 4, labelInside = false, labelOutside = "", easing = cubicOut, color = "primary", class: className, classes, ...restProps }: ProgressradialProps = $props();

  const _progress = new Tween(0, {
    duration: animate ? tweenDuration : 0,
    easing
  });

  const { base, labelInsideDiv, circleBackground, circleForeground, outsideDiv, outsideSpan, outsideProgress } = $derived(
    progressradial({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });

  // Calculate the circle properties
  let circumference = 2 * Math.PI * radius;
  // let strokeDashoffset = $state()
  // Calculate the stroke-dashoffset based on progress
  let strokeDashoffset = $derived(circumference - (_progress.current / 100) * circumference);
  let rotationAngle = $derived(startingPosition === "top" ? -90 : startingPosition === "right" ? 0 : startingPosition === "bottom" ? 90 : startingPosition === "left" ? 180 : -90);

  let formattedProgress = $derived(_progress.current.toFixed(precision));
</script>

<div class="flex flex-col items-center">
  {#if labelOutside}
    <div class={outsideDiv({ class: clsx(classes?.outsideDiv) })}>
      <span class={outsideSpan({ class: clsx(classes?.outsideSpan) })}>{labelOutside}</span>
      <span class={outsideProgress({ class: clsx(classes?.outsideProgress) })}>{formattedProgress}%</span>
    </div>
  {/if}

  <div {...restProps} class={base({ class: clsx(size, classes?.base, className) })}>
    <svg viewBox="0 0 100 100" class="h-full w-full" style="transform: rotate({rotationAngle}deg)">
      <!-- Background circle -->
      <circle cx="50" cy="50" r={radius} class={circleBackground({ class: clsx(classes?.circleBackground) })} fill="none" stroke-width={thickness} />

      <!-- Foreground circle (progress indicator) -->
      <circle cx="50" cy="50" r={radius} class={circleForeground({ class: clsx(classes?.circleForeground) })} fill="none" stroke-width={thickness} stroke-dasharray={circumference} stroke-dashoffset={strokeDashoffset} stroke-linecap="round" />
    </svg>

    {#if labelInside}
      <div class={labelInsideDiv({ class: clsx(classes?.labelInsideDiv) })}>
        {formattedProgress}%
      </div>
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressradialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1186)
## Props
@prop progress = 45
@prop radius = 42
@prop startingPosition = "top"
@prop precision = 0
@prop tweenDuration = 400
@prop animate = false
@prop size = "h-24 w-24"
@prop thickness = 4
@prop labelInside = false
@prop labelOutside = ""
@prop easing = cubicOut
@prop color = "primary"
@prop class: className
@prop classes
@prop ...restProps
-->
