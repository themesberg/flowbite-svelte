<script lang="ts">
  import type { ComponentProps } from 'svelte';
  import { getContext } from 'svelte';
  import { writable, type Writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  import ToolbarButton from '../toolbar/ToolbarButton.svelte';
  import Menu from './Menu.svelte';

  type $$Props = ComponentProps<ToolbarButton> & {
    menuClass?: string;
    onClick?: (() => void) | undefined;
    classMenu?: string;
    title?: string;
  };

  export let menuClass: $$Props['menuClass'] = 'h-6 w-6 shrink-0';
  export let onClick: $$Props['onClick'] = undefined;
  export let classMenu: $$Props['classMenu'] = '';
  export let title: $$Props['title'] = 'Open main menu';

  let btnClass: string = 'ms-3 md:hidden';

  let hiddenStore = getContext<Writable<boolean>>('navHidden') ?? writable(true);
  const toggle = (ev: MouseEvent) => hiddenStore.update((h) => !h);
</script>

<ToolbarButton name={title} on:click={onClick || toggle} {...$$restProps} class={twMerge(btnClass, $$props.class)}>
  <Menu class={twMerge(menuClass, classMenu)} />
</ToolbarButton>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let menuClass: $$Props['menuClass'] = 'h-6 w-6 shrink-0';
@prop export let onClick: $$Props['onClick'] = undefined;
@prop export let classMenu: $$Props['classMenu'] = '';
-->
