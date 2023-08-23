<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let aClass: string = 'flex items-center';
  export let spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
  export let imgClass: string = 'mr-3 h-8';
  export let href: string = '';
  export let src: string = '';
  export let alt: string = '';
  export let name: string = '';
  export let target: string | undefined = undefined;

  let aCls: string = twMerge(aClass, $$props.classA);
  let spanCls: string = twMerge(spanClass, $$props.classSpan);
  let imgCls: string = twMerge(imgClass, $$props.classImg);
</script>

{#if href}
  <a {...$$restProps} {href} {target} class={aCls}>
    <img {src} class={imgCls} {alt} />
    <span class={spanCls}>{name}</span>
    <slot />
  </a>
{:else}
  <img {...$$restProps} {src} class={imgCls} {alt} />
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let aClass: string = 'flex items-center';
@prop export let spanClass: string = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
@prop export let imgClass: string = 'mr-3 h-8';
@prop export let href: string = '';
@prop export let src: string = '';
@prop export let alt: string = '';
@prop export let name: string = '';
@prop export let target: string | undefined = undefined;
-->
