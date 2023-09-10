<script lang="ts">
  import { twMerge } from "tailwind-merge";
  const sidebarLeft = 'flex-none overflow-x-hidden overflow-y-auto';
  export let slotSidebarLeft = 'w-auto';
  $: sidebarLeftClass = twMerge(sidebarLeft, slotSidebarLeft, $$props.classLeft);
</script>

<aside id="sidebar-left" class={sidebarLeftClass} {...$$restProps} >
  <slot />
</aside>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let slotSidebarLeft = 'w-auto';
-->
