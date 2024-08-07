<script lang="ts">
  import { setContext } from 'svelte';
  import ListgroupItem from './ListgroupItem.svelte';
  import { type ListgroupProps as Props, listGroup } from '.';

  let {
    children,
    items,
    active,
    onclick,
    rounded = true,
    border = true,
    class: className,
    ...attributes
  }: Props = $props();
  const base = $derived(listGroup({ rounded, border, className }));
  let tag = active ? 'div' : 'ul';
  setContext('active', active);
</script>

<svelte:element this={tag} {...attributes} class={base}>
  {#if items}
    {#each items as item}
      {#if typeof item === 'string'}
        <ListgroupItem {active} {onclick}>{item}</ListgroupItem>
      {:else}
        <ListgroupItem {active} {...item} {onclick}>{item}</ListgroupItem>
      {/if}
    {/each}
  {:else if children}
    {@render children()}
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
@prop class: className
@prop ...attributes
-->
