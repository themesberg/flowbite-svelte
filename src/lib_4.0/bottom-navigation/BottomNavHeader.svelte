<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  import type { HTMLAttributes } from 'svelte/elements';

  interface $$Props extends HTMLAttributes<HTMLDivElement> {
    outerClass?: string;
    innerClass?: string;
    classOuter?: string;
    classInner?: string;
  }

  export let outerClass: $$Props['outerClass'] = 'w-full';
  export let innerClass: $$Props['innerClass'] = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
  export let classOuter: $$Props['classOuter'] = '';
  export let classInner: $$Props['classInner'] = '';
</script>

<div {...$$restProps} class={twMerge(outerClass, classOuter)} >
  <div class={twMerge(innerClass, classInner)} role="group">
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let outerClass: $$Props['outerClass'] = 'w-full';
@prop export let innerClass: $$Props['innerClass'] = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
@prop export let classOuter: $$Props['classOuter'] = '';
@prop export let classInner: $$Props['classInner'] = '';
-->
