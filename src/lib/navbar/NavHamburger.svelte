<script lang="ts">
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  import ToolbarButton from '../toolbar/ToolbarButton.svelte';
  import Menu from './Menu.svelte';

  export let menuClass: string = 'h-6 w-6 shrink-0';
  export let onClick: (() => void) | undefined = undefined;

  let btnClass: string = 'ms-3 md:hidden';

  let hiddenStore = getContext<Writable<boolean>>('navHidden') ?? writable(true);
  const toggle = (ev: MouseEvent) => hiddenStore.update((h) => !h);
</script>

<ToolbarButton name="Open main menu" on:click={onClick || toggle} {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <Menu class={twMerge(menuClass, $$props.classMenu)} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let menuClass: string = 'h-6 w-6 shrink-0';
@prop export let onClick: (() => void) | undefined = undefined;
-->
