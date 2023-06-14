<script lang="ts">
  import { twMerge } from 'tailwind-merge';
  export let outerClass: string = 'w-full';
  export let innerClass: string =
    'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
</script>

<div class={twMerge(outerClass, $$props.classOuter)} {...$$restProps}>
  <div class={twMerge(innerClass, $$props.classInner)} role="group">
    <slot />
  </div>
</div>

<!--
  @component
  ## Features
  [Go to Bottom Navigation](https://flowbite-svelte.com/docs/components/bottom-navigation)
  ## Props
  @prop outerClass: string = 'w-full';
  @prop innerClass: string = 'grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-gray-100 rounded-lg dark:bg-gray-600';
  ## Example
  ```
  <BottomNav position="absolute" navType="group" innerDiv="grid-cols-5">
    <BottomNavHeader slot="header">
        <BottomNavHeaderItem itemName="New" />
        <BottomNavHeaderItem itemName="Popular" active={true}/>
        <BottomNavHeaderItem itemName="Following" />
    </BottomNavHeader>
    ...
  </BottomNav> 
  ```
-->
