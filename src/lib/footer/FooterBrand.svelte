<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: any;
    aclass?: string | undefined;
    spanclass?: string | undefined;
    imgclass?: string | undefined;
    href?: string | undefined;
    src?: string | undefined;
    alt?: string | undefined;
    name?: string | undefined;
    target?: string | undefined;
  }
  let { children, aclass, spanclass, imgclass, href, src, alt, name, target, ...attributes } = $props<Props>();

  let aCls: string = twMerge('flex items-center', aclass);
  let spanCls: string = twMerge('self-center text-2xl font-semibold whitespace-nowrap dark:text-white', spanclass);
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
[Go to docs](https://svelte-5-ui-lib.vercel.app/)
## Props
@props: children?: any;
@props:aclass?: string | undefined;
@props:spanclass?: string | undefined;
@props:imgclass?: string | undefined;
@props:href?: string | undefined;
@props:src?: string | undefined;
@props:alt?: string | undefined;
@props:name?: string | undefined;
@props:target?: string | undefined;
-->
