<script lang="ts">
  import type { Snippet } from 'svelte';
  import { createEventDispatcher, setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { ListGroupItemType } from '../types';
  import ListgroupItem from './ListgroupItem.svelte';

  interface Props {
    children?: Snippet;
    items: ListGroupItemType[] | string[];
    btn?: boolean;
    rounded?: boolean;
    border?: boolean;
    defaultclass?: string;
  }

  let {
    children,
    items,
    btn,
    rounded = true,
    border = true,
    defaultclass,
    ...attributes
  }: Props = $props();
  const dispatch = createEventDispatcher();
  const bgColor = 'bg-white dark:bg-gray-800';
  const textColor = 'text-gray-500 dark:text-gray-400';
  const borderColor =
    'border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700';
  const divClass = twMerge(
    bgColor,
    textColor,
    rounded && 'rounded-lg',
    border && 'border',
    borderColor
  );
  const defaultCls: string = twMerge(
    'divide-y divide-gray-200 dark:divide-gray-600',
    divClass,
    defaultclass
  );
  let tag = btn ? 'div' : 'ul';
  setContext('btn', btn);
</script>

<svelte:element this={tag} {...attributes} class={defaultCls}>
  {#each items as item, index}
    {#if typeof item === 'string'}
      <ListgroupItem {btn} {index} onclick={() => dispatch('click', item)}
        >{item}</ListgroupItem
      >
    {:else}
      <ListgroupItem
        {btn}
        {...item}
        {index}
        onclick={() => dispatch('click', item)}>{item}</ListgroupItem
      >
    {/if}
  {:else}
    {@const item = items[0]}
    {#if children}
      {@render children()}
    {/if}
  {/each}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:items: ListGroupItemType[] | string[];
@props:btn?: boolean;
@props:rounded?:  boolean; = true;
@props:border?:  boolean; = true;
@props:defaultclass?: string;
-->
