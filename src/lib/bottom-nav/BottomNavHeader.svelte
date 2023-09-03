<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let outerClass: string = 'w-full';
  export let innerClass: string = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
</script>

<div class={twMerge(outerClass, $$props.classOuter)} {...$$restProps}>
  <div class={twMerge(innerClass, $$props.classInner)} role="group">
    <slot />
  </div>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let outerClass: string = 'w-full';
@prop export let innerClass: string = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
-->
