<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import type { Writable } from "svelte/store";
  import { fly } from "svelte/transition";
  import { slide } from "./theme";
  import type { SlideProps, State } from "$lib/types";

  const state = getContext<Writable<State>>("state");

  let { image, transition, class: className, ...restProps }: SlideProps = $props();

  let transitionSlideIn = $derived({
    x: $state.forward ? "100%" : "-100%",
    opacity: 1,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });

  let transitionSlideOut = $derived({
    x: $state.forward ? "-100%" : "100%",
    opacity: 0.9,
    width: "100%",
    height: "100%",
    duration: $state.slideDuration
  });

  let imgClass = $derived(slide({ class: clsx(className) }));
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
[SlideProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L434)
## Props
@prop image
@prop transition
@prop class: className
@prop ...restProps
-->
