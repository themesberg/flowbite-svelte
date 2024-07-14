<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  interface Props extends HTMLAnchorAttributes {
    children?: Snippet;
    aClass?: string | undefined;
    spanClass?: string | undefined;
    imgClass?: string | undefined;
    href?: string | undefined;
    src?: string | undefined;
    alt?: string | undefined;
    name?: string | undefined;
  }
  let {
    children,
    aClass,
    spanClass,
    imgClass,
    href,
    src,
    alt,
    name,
    ...attributes
  }: Props = $props();

  let aCls: string = twMerge('flex items-center', aClass);
  let spanCls: string = twMerge(
    'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
    spanClass
  );
  let imgCls: string = twMerge('me-3 h-8', imgClass);
</script>

{#if href}
  <a {...attributes} {href} class={aCls}>
    {#if src}
      <img {src} class={imgCls} {alt} />
    {/if}
    {#if name}
      <span class={spanCls}>{name}</span>
    {/if}
    {#if children}
      {@render children()}
    {/if}
  </a>
{:else}
  <img {src} class={imgCls} {alt} />
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop aClass
@prop spanClass
@prop imgClass
@prop href
@prop src
@prop alt
@prop name
@prop ...attributes
-->
