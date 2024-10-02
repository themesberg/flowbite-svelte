<script lang="ts">
  import { setContext } from 'svelte';
  import ListgroupItem from './ListgroupItem.svelte';
  import { type ListgroupProps as Props, listGroup } from '.';

  let { children, items, active, onclick, rounded = true, border = true, class: className, ...restProps }: Props = $props();
  const base = $derived(listGroup({ rounded, border, className }));
  let tag = active ? 'div' : 'ul';
  setContext('active', active);
</script>

<svelte:element this={tag} {...restProps} class={base}>
  {#if items}
    {#each items as item}
      {#if typeof item === 'string'}
        <ListgroupItem {active} {onclick}>{item}</ListgroupItem>
      {:else}
        <ListgroupItem {active} {...item} onclick={item.onclick ? item.onclick : onclick}>{item}</ListgroupItem>
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
@props: children: any;
@props:items: any;
@props:active: any;
@props:onclick: any;
@props:rounded: any = true;
@props:border: any = true;
@props:class: any;
-->
