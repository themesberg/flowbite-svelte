<script lang="ts">
  import { type ControlsProps, type State, ControlButton } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { canChangeSlide } from "./CarouselSlide";

  let { children, class: className, ...restProps }: ControlsProps = $props();

  const theme = getTheme("controlButton");

  const _state = getContext<State>("state");

  function changeSlide(forward: boolean) {
    const { lastSlideChange, slideDuration } = _state;
    if (!canChangeSlide({ lastSlideChange, slideDuration, slideDurationRatio: 0.75 })) {
      return;
    }

    if (forward) {
      _state.forward = true;
      _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
    } else {
      _state.forward = false;
      _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
    }
    _state.lastSlideChange = new Date();
    return _state;
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
[ControlsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L400)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
