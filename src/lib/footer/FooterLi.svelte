<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  
  interface Props {
    children?: Snippet;
    liclass?: string | undefined;
    aclass?: string | undefined;
    href?: string | undefined;
    target?: string | undefined;
  }

  let { children, liclass, aclass, href, target, ...attributes }: Props = $props();

  let liCls: string = twMerge('me-4 last:me-0 md:me-6', liclass);
  let aCls: string = twMerge('hover:underline', aclass);
</script>

{#if children}
<li class={liCls}>
  <a {...attributes} {href} class={aCls} {target}>
    {@render children()}
  </a>
</li>
{:else}
  Footer Li content
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:liclass?: string | undefined;
@props:aclass?: string | undefined;
@props:href?: string | undefined;
@props:target?: string | undefined;
-->
