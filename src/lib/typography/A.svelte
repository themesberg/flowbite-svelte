<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes{
    children: Snippet;
    class?: string;
  }

  let { children, class: aClass, ...attributes }: Props = $props();

  const colorCls: string = 'text-primary-600 dark:text-primary-500';
  const aCls: string = 'inline-flex items-center hover:underline';
</script>

<a {...attributes} class={twMerge(aCls, colorCls, aClass)}>
    {@render children()}
</a>
