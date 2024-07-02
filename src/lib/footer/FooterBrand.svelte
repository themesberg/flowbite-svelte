<script lang="ts">
  import type { Snippet } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: Snippet;
    aclass?: string | undefined;
    spanClass?: string | undefined;
    imgclass?: string | undefined;
    href?: string | undefined;
    src?: string | undefined;
    alt?: string | undefined;
    name?: string | undefined;
    target?: string | undefined;
  }
  let {
    children,
    aclass,
    spanClass,
    imgclass,
    href,
    src,
    alt,
    name,
    target,
    ...attributes
  }: Props = $props();

  let aCls: string = twMerge('flex items-center', aclass);
  let spanCls: string = twMerge(
    'self-center text-2xl font-semibold whitespace-nowrap dark:text-white',
    spanClass
  );
  let imgCls: string = twMerge('me-3 h-8', imgclass);
</script>

{#if href}
  <a {...attributes} {href} {target} class={aCls}>
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
@prop aclass
@prop spanClass
@prop imgclass
@prop href
@prop src
@prop alt
@prop name
@prop target
@prop ...attributes
-->
