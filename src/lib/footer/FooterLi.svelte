<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    children: Snippet;
    liClass?: string | undefined;
    aClass?: string | undefined;
    href?: string | undefined;
  }

  let { children, liClass, aClass, href, ...attributes }: Props =
    $props();

  let liCls: string = twMerge('me-4 last:me-0 md:me-6', liClass);
  let aCls: string = twMerge('hover:underline', aClass);
</script>

<li class={liCls}>
  <a {...attributes} {href} class={aCls}>
    {@render children()}
  </a>
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop liClass
@prop aClass
@prop href
@prop ...attributes
-->
