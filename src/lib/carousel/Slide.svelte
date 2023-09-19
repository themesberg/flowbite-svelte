<script lang="ts">
  import { quintOut } from 'svelte/easing';
  import type { HTMLImgAttributes } from 'svelte/elements';
  import { fade, type TransitionConfig } from 'svelte/transition';
  import { twMerge } from 'tailwind-merge';

  type TransitionFunc = (node: HTMLElement, params: any) => TransitionConfig;

  export let image: HTMLImgAttributes;
  export let transition: TransitionFunc = (x) => fade(x, { duration: 700, easing: quintOut });

  $: imgClass = twMerge('absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover', $$props.class);
</script>

{#key image}
  <img alt="..." {...image} transition:transition={{}} {...$$restProps} class={imgClass} />
{/key}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let image: HTMLImgAttributes;
@prop export let transition: TransitionFunc = (x) => fade(x, { duration: 700, easing: quintOut });
-->
