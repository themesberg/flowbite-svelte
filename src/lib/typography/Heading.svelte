<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children?: Snippet;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    class?: string | undefined;
  }

  let {
    children,
    tag = 'h1',
    class: classname,
    ...attributes
  }: Props = $props();

  const textSizes = {
    h1: 'text-5xl font-extrabold',
    h2: 'text-4xl font-bold',
    h3: 'text-3xl font-bold',
    h4: 'text-2xl font-bold',
    h5: 'text-xl font-bold',
    h6: 'text-lg font-bold'
  };
</script>

<svelte:element
  this={tag}
  {...attributes}
  class={twMerge(
    textSizes[tag],
    'w-full text-gray-900 dark:text-white',
    classname
  )}
>
  {#if children}
    {@render children()}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:tag?:  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; = 'h1';
@props:class?: string | undefined;
-->
