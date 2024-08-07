<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';
  import { kbd } from '.';

  interface Props extends HTMLAttributes<HTMLElement> {
    children: Snippet;
    class: string | undefined | null;
  }

  let { children, class: kbdClass, ...attributes }: Props = $props();
  const kbdCls = kbd();
</script>

<kbd class={twMerge(kbdCls, kbdClass)} {...attributes}>
  {@render children()}
</kbd>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: kbdClass
@prop ...attributes
-->
