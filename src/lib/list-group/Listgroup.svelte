<script lang="ts">
  import { setContext } from "svelte";
  import ListgroupItem from "./ListgroupItem.svelte";
  import { type ListgroupProps as Props, listGroup } from ".";
  import clsx from "clsx";

  let { children, items, active, onclick, horizontal, rounded, border, class: className, itemClass, iconClass, ...restProps }: Props = $props();

  const base = $derived(listGroup({ rounded, border, horizontal, class: clsx(className) }));

  let tag = active ? "div" : "ul";
  setContext("active", active);
</script>

<svelte:element this={tag} {...restProps} class={base}>
  {#if items?.length}
    {#each items as item}
      {#if children}
        {@render children(item)}
      {:else if typeof item === "string"}
        <ListgroupItem href={null} class={itemClass} {iconClass} {active} {horizontal} {onclick}>{item}</ListgroupItem>
      {:else}
        <ListgroupItem href={item.href ?? null} class={itemClass} {iconClass} {active} {horizontal} {...item} onclick={item.onclick ?? onclick} />
      {/if}
    {/each}
  {:else}
    {@render children?.(items?.[0])}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:items: any;
@props:active: any;
@props:onclick: any;
@props:horizontal: any;
@props:rounded: any;
@props:border: any;
@props:class: string;
@props:itemClass: any;
@props:iconClass: any;
-->
