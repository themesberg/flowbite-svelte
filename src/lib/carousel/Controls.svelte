<script lang="ts">
  import type { ControlsProps } from "$lib";
  import ControlButton from "./ControlButton.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import clsx from "clsx";
  import { getCarouselContext } from "$lib/context";

  let { children, class: className, ...restProps }: ControlsProps = $props();

  const theme = $derived(getTheme("controlButton"));

  const _state = getCarouselContext();

  function changeSlide(forward: boolean) {
    if (!_state) return;
    _state.changeSlide(forward ? _state.index + 1 : _state.index - 1);
  }
</script>

<!-- Slider controls -->
{#if children}
  {@render children(changeSlide)}
{:else}
  <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} class={clsx(theme, className)} {...restProps} />
  <ControlButton name="Next" forward={true} onclick={() => changeSlide(true)} class={clsx(theme, className)} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ControlsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L495)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
