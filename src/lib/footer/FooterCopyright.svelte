<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLAnchorAttributes {
    classSpan?: string;
    aClass?: string;
    year?: number;
    by?: string;
    href?: string;
    target?: string;
    copyrightMessage?: string;
  }
  export let spanClass: $$Props['classSpan'] = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
  export let aClass: $$Props['aClass'] = 'hover:underline';
  export let year: $$Props['year'] = new Date().getFullYear();
  export let href: $$Props['href'] = '';
  export let by: $$Props['by'] = '';
  export let target: $$Props['target'] = undefined;
  export let copyrightMessage: $$Props['copyrightMessage'] = 'All Rights Reserved.';

  let spanCls: string = twMerge(spanClass, $$props.classSpan);
  let aCls: string = twMerge(aClass, $$props.classA);
</script>

<span class={spanCls}>
  &copy; {year}
  {#if href}
    <a {...$$restProps} {href} {target} class={aCls}>
      {by}
    </a>
  {:else}
    <span class="ms-1">{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let spanClass: $$Props['classSpan'] = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
@prop export let aClass: $$Props['aClass'] = 'hover:underline';
@prop export let year: $$Props['year'] = new Date().getFullYear();
@prop export let href: $$Props['href'] = '';
@prop export let by: $$Props['by'] = '';
@prop export let target: $$Props['target'] = undefined;
@prop export let copyrightMessage: $$Props['copyrightMessage'] = 'All Rights Reserved.';
-->
