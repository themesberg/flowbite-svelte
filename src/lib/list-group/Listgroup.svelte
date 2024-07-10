<script lang="ts">
  import type { Snippet } from 'svelte';
  import { setContext } from 'svelte';
  import { twMerge } from 'tailwind-merge';
  import type { ListGroupItemType } from '../types';
  import ListgroupItem from './ListgroupItem.svelte';

  interface Props {
    children?: Snippet;
    items?: ListGroupItemType[] | string[];
    active?: boolean;
    onclick?: () => void;
    rounded?: boolean;
    border?: boolean;
    defaultClass?: string;
    class?: string;
  }

  let {
    children,
    items,
    active,
    onclick,
    rounded = true,
    border = true,
    defaultClass = 'divide-y divide-gray-200 dark:divide-gray-600',
    class: className,
    ...attributes
  }: Props = $props();
  
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
    defaultClass,
    divClass,
    className
  );
  let tag = active ? 'div' : 'ul';
  setContext('active', active);
</script>

<svelte:element this={tag} {...attributes} class={defaultCls}>
  {#if items}
    {#each items as item}
      {#if typeof item === 'string'}
        <ListgroupItem {active} {onclick}
          >{item}</ListgroupItem
        >
      {:else}
        <ListgroupItem
          {active}
          {...item}
          {onclick}>{item}</ListgroupItem
        >
      {/if}
    {/each}
  {:else}
    {#if children}
      {@render children()}
    {/if}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@prop children
@prop items
@prop active
@prop onclick
@prop rounded = true
@prop border = true
@prop defaultClass = 'divide-y divide-gray-200 dark:divide-gray-600'
@prop class: className
@prop ...attributes
-->
