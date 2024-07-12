<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    class?: string | undefined;
    color?: string;
    customSize?: string;
  }

  let {
    children,
    tag = 'h1',
    class: classname,
    customSize = '',
    color = 'text-gray-900 dark:text-white',
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
    customSize ? customSize : textSizes[tag],
    color,
    classname
  )}
>
  {@render children()}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop tag = 'h1'
@prop class: classname
@prop customSize = ''
@prop color = 'text-gray-900 dark:text-white'
@prop ...attributes
-->
