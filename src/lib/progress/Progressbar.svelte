<script lang="ts">
  import type { ProgressbarProps } from "$lib/types";
  import clsx from "clsx";
  import { cubicOut } from "svelte/easing";
  import { Tween } from "svelte/motion";
  import { progressbar } from "./theme";
  import { getTheme } from "$lib/theme-provider/themeUtils";

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

  const theme = $derived(getTheme("progressbar"));

  let _progress = $derived(
    new Tween(0, {
      duration: animate ? tweenDuration : 0,
      easing
    })
  );
  const {
    base,
    label: labelInsideCls,
    bar,
    labelWrapper,
    labelText,
    percentage
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
  <div {...restProps} data-part="label-wrapper" class={labelWrapper({ class: clsx(theme?.labelWrapper, classes?.labelWrapper) })}>
    <span data-part="label-text" class={labelText({ class: clsx(theme?.labelText, classes?.labelText) })}>{labelOutside}</span>
    <span data-part="percentage" class={percentage({ class: clsx(theme?.percentage, classes?.percentage) })}>{progress}%</span>
  </div>
{/if}
<div {...restProps} data-scope="progressbar" data-part="base" class={base({ class: clsx(size, theme?.base, className) })}>
  {#if labelInside}
    <div data-part="label" class={labelInsideCls({ class: clsx(size, theme?.label, classes?.label) })} style="width: {_progress.current}%">
      {_progress.current.toFixed(precision)}%
    </div>
  {:else}
    <div data-part="bar" class={bar({ class: clsx(size, theme?.bar, classes?.bar) })} style="width: {_progress.current}%"></div>
  {/if}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ProgressbarProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1207)
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
