<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAnchorAttributes {
    liClass?: string;
    aClass?: string;
    href?: string;
    target?: string;
  }

  export let liClass: $$Props['liClass'] = 'me-4 last:me-0 md:me-6';
  export let aClass: $$Props['aClass'] = 'hover:underline';
  export let href: $$Props['href'] = '';
  export let target: $$Props['target'] = undefined;

  let liCls: string = twMerge(liClass, $$props.classLi);
  let aCls: string = twMerge(aClass, $$props.classA);
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
-->
