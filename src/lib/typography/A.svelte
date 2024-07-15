<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    children: Snippet;
    class?: string | undefined | null;
  }

  let { children, class: aClass, ...attributes }: Props = $props();

  const colorCls: string = 'text-primary-600 dark:text-primary-500';
  const aCls: string = 'inline-flex items-center hover:underline';
</script>

<a {...attributes} class={twMerge(aCls, colorCls, aClass)}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop class: aClass
@prop ...attributes
-->
