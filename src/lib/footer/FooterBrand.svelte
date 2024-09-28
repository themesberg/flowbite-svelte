<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAnchorAttributes {
    aClass?: string;
    spanClass?: string;
    imgClass?: string;
    href?: string;
    src?: string;
    alt?: string;
    name?: string;
    target?: string;
  }
  export let aClass: $$Props['aClass'] = 'flex items-center';
  export let spanClass: $$Props['spanClass'] = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
  export let imgClass: $$Props['imgClass'] = 'me-3 h-8';
  export let href: $$Props['href'] = '';
  export let src: $$Props['src'] = '';
  export let alt: $$Props['alt'] = '';
  export let name: $$Props['name'] = '';
  export let target: $$Props['target'] = '';

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
## Props
@prop export let aClass: $$Props['aClass'] = 'flex items-center';
@prop export let spanClass: $$Props['spanClass'] = 'self-center text-2xl font-semibold whitespace-nowrap dark:text-white';
@prop export let imgClass: $$Props['imgClass'] = 'me-3 h-8';
@prop export let href: $$Props['href'] = '';
@prop export let src: $$Props['src'] = '';
@prop export let alt: $$Props['alt'] = '';
@prop export let name: $$Props['name'] = '';
@prop export let target: $$Props['target'] = '';
-->
