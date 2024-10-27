<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAnchorAttributes {
    liClass?: string;
    aClass?: string;
    href?: string;
    target?: string;
    classLi?: string;
    classA?: string;
  }

  export let liClass: $$Props['liClass'] = 'me-4 last:me-0 md:me-6';
  export let aClass: $$Props['aClass'] = 'hover:underline';
  export let href: $$Props['href'] = '';
  export let target: $$Props['target'] = undefined;
  export let classLi: $$Props['classLi'] = '';
  export let classA: $$Props['classA'] = '';

  let liCls: string = twMerge(liClass, classLi);
  let aCls: string = twMerge(aClass, classA);
</script>

<li class={liCls}>
  <a {...$$restProps} {href} class={aCls} {target}>
    <slot />
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let liClass: $$Props['liClass'] = 'me-4 last:me-0 md:me-6';
@prop export let aClass: $$Props['aClass'] = 'hover:underline';
@prop export let href: $$Props['href'] = '';
@prop export let target: $$Props['target'] = undefined;
@prop export let classLi: $$Props['classLi'] = '';
@prop export let classA: $$Props['classA'] = '';
-->
