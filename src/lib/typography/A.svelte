<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';

  interface Props {
    children: Snippet;
    href: string;
    aclass?: string | undefined;
  }

  let { children, href = '#', aclass, ...attributes }: Props = $props();

  const colorCls: string = 'text-primary-600 dark:text-primary-500';
  const aCls: string = 'inline-flex items-center hover:underline';
</script>

<a {...attributes} {href} class={twMerge(aCls, colorCls, aclass)}>
  
    {@render children()}
 
</a>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop href = '#'
@prop aclass
@prop ...attributes
-->
