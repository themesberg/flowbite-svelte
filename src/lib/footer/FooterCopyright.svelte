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
    <span class="ml-1">{by}</span>
  {/if}
  {copyrightMessage}
</span>

<!--
  @component
  ## Feature
  [Go to Footer](https://flowbite-svelte.com/docs/components/footer)
  ## Props
  @prop spanClass: string = 'block text-sm text-gray-500 sm:text-center dark:text-gray-400';
  @prop aClass: string = 'hover:underline';
  @prop year: number = new Date().getFullYear();
  @prop href: string = '';
  @prop by: string = '';
  @prop target: string | undefined = undefined;
  @prop copyrightMessage: string = 'All Rights Reserved.'; 
-->
