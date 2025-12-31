<script lang="ts">
  import { progressradial } from "./theme";
  import type { ProgressradialProps } from "$lib/types";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let {
    progress = 45,
    radius = 42,
    startingPosition = "top",
    precision = 0,
    tweenDuration = 400,
    animate = false,
    size = "h-24 w-24",
    thickness = 4,
    labelInside = false,
    labelOutside = "",
    easing = cubicOut,
    color = "primary",
    class: className,
    classes,
    ...restProps
  }: ProgressradialProps = $props();

  const theme = $derived(getTheme("progressradial"));

  const _progress = $derived(
    new Tween(0, {
      duration: animate ? tweenDuration : 0,
      easing
    })
  );

  const { base, label, background, foreground, labelWrapper, labelText, percentage } = $derived(
    progressradial({
      color,
      labelInside
    })
  );

  $effect(() => {
    _progress.set(Number(progress));
  });

  // Calculate the circle properties
  let circumference = $derived(2 * Math.PI * radius);
  // let strokeDashoffset = $state()
  // Calculate the stroke-dashoffset based on progress
  let strokeDashoffset = $derived(circumference - (_progress.current / 100) * circumference);
  let rotationAngle = $derived(startingPosition === "top" ? -90 : startingPosition === "right" ? 0 : startingPosition === "bottom" ? 90 : startingPosition === "left" ? 180 : -90);

  let formattedProgress = $derived(_progress.current.toFixed(precision));
</script>

<div data-scope="progressradial" class="flex flex-col items-center">
  {#if labelOutside}
    <div data-part="label-wrapper" class={labelWrapper({ class: clsx(theme?.labelWrapper, classes?.labelWrapper) })}>
      <span data-part="label-text" class={labelText({ class: clsx(theme?.labelText, classes?.labelText) })}>{labelOutside}</span>
      <span data-part="percentage" class={percentage({ class: clsx(theme?.percentage, classes?.percentage) })}>{formattedProgress}%</span>
    </div>
  {/if}

  <div {...restProps} data-part="base" class={base({ class: clsx(size, theme?.base, className) })}>
    <svg viewBox="0 0 100 100" class="h-full w-full" style="transform: rotate({rotationAngle}deg)">
      <!-- Background circle -->
      <circle data-part="background" cx="50" cy="50" r={radius} class={background({ class: clsx(theme?.background, classes?.background) })} fill="none" stroke-width={thickness} />

      <!-- Foreground circle (progress indicator) -->
      <circle
        data-part="foreground"
        cx="50"
        cy="50"
        r={radius}
        class={foreground({ class: clsx(theme?.foreground, classes?.foreground) })}
        fill="none"
        stroke-width={thickness}
        stroke-dasharray={circumference}
        stroke-dashoffset={strokeDashoffset}
        stroke-linecap="round"
      />
    </svg>

    {#if labelInside}
      <div data-part="label" class={label({ class: clsx(theme?.label, classes?.label) })}>
        {formattedProgress}%
      </div>
    {/if}
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressradialProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1218)
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
