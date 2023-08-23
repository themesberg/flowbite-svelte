<script lang="ts">
  import ToolbarButton from '../toolbar/ToolbarButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import SidebarMenu from './SidebarMenu.svelte';

  export let btnClass: string = 'ml-3 md:hidden';
  export let sideMenuClass: string = 'h-6 w-6 shrink-0';
</script>

<ToolbarButton name="Open main menu" on:click {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <SidebarMenu class={twMerge(sideMenuClass, $$props.classSideMenu)} variation="solid" />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let btnClass: string = 'ml-3 md:hidden';
@prop export let sideMenuClass: string = 'h-6 w-6 shrink-0';
-->
