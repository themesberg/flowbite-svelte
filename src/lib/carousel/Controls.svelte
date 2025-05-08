<script lang="ts">
  import { getContext, type Snippet } from "svelte";
  import type { Writable } from "svelte/store";
  import { canChangeSlide } from "./CarouselSlide";
  import ControlButton from "./ControlButton.svelte";
  import type { State, ControlsProps } from "$lib/types";

  let { children, class: className, ...restProps }: ControlsProps = $props();

  const state = getContext<Writable<State>>("state");
  const { update } = state;

  function changeSlide(forward: boolean) {
    if (
      !canChangeSlide({
        lastSlideChange: $state.lastSlideChange,
        slideDuration: $state.slideDuration,
        slideDurationRatio: 0.75
      })
    ) {
      return;
    }

    if (forward) {
      update((_state) => {
        _state.forward = true;
        _state.index = _state.index >= _state.images.length - 1 ? 0 : _state.index + 1;
        _state.lastSlideChange = new Date();
        return { ..._state };
      });
    } else {
      update((_state) => {
        _state.forward = false;
        _state.index = _state.index <= 0 ? _state.images.length - 1 : _state.index - 1;
        _state.lastSlideChange = new Date();
        return { ..._state };
      });
    }
  }
</script>

<!-- Slider controls -->
{#if children}
  {@render children(changeSlide)}
{:else}
  <ControlButton name="Previous" forward={false} onclick={() => changeSlide(false)} class={className} {...restProps} />
  <ControlButton name="Next" forward={true} onclick={() => changeSlide(true)} class={className} {...restProps} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ControlsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L416)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
