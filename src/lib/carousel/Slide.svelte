<script lang="ts">
  import type { SlideProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { getCarouselContext } from "$lib/context";
  import { fly } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { slide } from "./theme";

  const _state = getCarouselContext();

  let { image, transition, fit, class: className, ...restProps }: SlideProps = $props();

  const theme = $derived(getTheme("slide"));

  // Check if running in browser to avoid SSR issues
  const isBrowser = typeof window !== "undefined";

  let transitionSlideIn = $derived({
    x: _state?.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: isBrowser && prefersReducedMotion.current ? 0 : (_state?.slideDuration ?? 1000)
  });

  let transitionSlideOut = $derived({
    x: _state?.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: isBrowser && prefersReducedMotion.current ? 0 : (_state?.slideDuration ?? 1000)
  });

  let imgClass = $derived(slide({ fit, class: clsx(theme, className) }));
</script>

{#if transition}
  {#key image}
    <img alt="..." {...image} transition:transition={{}} {...restProps} class={imgClass} />
  {/key}
{:else}
  {#key image}
    <img alt="..." {...image} {...restProps} out:fly={transitionSlideOut} in:fly={transitionSlideIn} class={imgClass} />
  {/key}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SlideProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L509)
## Props
@prop image
@prop transition
@prop fit
@prop class: className
@prop ...restProps
-->
