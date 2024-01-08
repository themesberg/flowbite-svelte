<script>import { twMerge } from "tailwind-merge";
let { children, aClass, spanClass, imgClass, href, src, alt, name, target, ...attributes } = $props();
let aCls = twMerge("flex items-center", aClass);
let spanCls = twMerge("self-center text-2xl font-semibold whitespace-nowrap dark:text-white", spanClass);
let imgCls = twMerge("me-3 h-8", imgClass);
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