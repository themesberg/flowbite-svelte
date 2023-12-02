<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let spanClass: string = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
  export let aClass: string = 'hover:underline';
  export let year: number = new Date().getFullYear();
  export let href: string = '';
  export let by: string = '';
  export let target: string | undefined = undefined;
  export let copyrightMessage: string = 'All Rights Reserved.';

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
@prop export let spanClass: string = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
@prop export let aClass: string = 'hover:underline';
@prop export let year: number = new Date().getFullYear();
@prop export let href: string = '';
@prop export let by: string = '';
@prop export let target: string | undefined = undefined;
@prop export let copyrightMessage: string = 'All Rights Reserved.';
-->
