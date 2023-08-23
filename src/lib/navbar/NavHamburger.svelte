<script lang="ts">
  import ToolbarButton from '../toolbar/ToolbarButton.svelte';
  import { twMerge } from 'tailwind-merge';
  import Menu from './Menu.svelte';

  export let btnClass: string = 'ml-3 md:hidden';
  export let menuClass: string = 'h-6 w-6 shrink-0';
</script>

<ToolbarButton name="Open main menu" on:click {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <Menu class={twMerge(menuClass, $$props.classMenu)} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Component data
@prop export let btnClass: string = 'ml-3 md:hidden';
@prop export let menuClass: string = 'h-6 w-6 shrink-0';
-->
