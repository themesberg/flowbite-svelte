<script lang="ts">
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { fly, type TransitionConfig } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';
  import { getContext } from 'svelte';
  import type { Writable } from 'svelte/store';
  import type { State } from './Carousel.svelte';
  import type { ParamsType } from '../types'

  const state = getContext<Writable<State>>('state');

  type TransitionFunc = (node: HTMLElement, params: ParamsType) => TransitionConfig;

  export let image: HTMLImgAttributes;
  export let transition: TransitionFunc | null = null; // Optional transition function, overrides default slide transition

  $: transitionSlideIn = {
    x: $state.forward ? '100%' : '-100%',
    opacity: 1,
    width: '100%',
    height: '100%',
    duration: $state.slideDuration
  };

  $: transitionSlideOut = {
    x: $state.forward ? '-100%' : '100%',
    opacity: 0.9,
    width: '100%',
    height: '100%',
    duration: $state.slideDuration
  };

  $: imgClass = twMerge('absolute block !w-full h-full object-cover', $$props.class);
</script>

{#if transition}
  {#key image}
    <img alt="..." {...image} transition:transition={{}} {...$$restProps} class={imgClass} />
  {/key}
{:else}
  {#key image}
    <img alt="..." {...image} {...$$restProps} out:fly={transitionSlideOut} in:fly={transitionSlideIn} class={imgClass} />
  {/key}
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let image: HTMLImgAttributes;
@prop export let transition: TransitionFunc | null = null;
-->
