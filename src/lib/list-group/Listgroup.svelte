<script lang="ts">
  import { setContext } from "svelte";
  import ListgroupItem from "./ListgroupItem.svelte";
  import { listGroup } from ".";
  import type { ListgroupProps } from "$lib/types";
  import clsx from "clsx";

  let { children, items, active, onclick, horizontal, rounded, border, class: className, itemClass, iconClass, ...restProps }: ListgroupProps = $props();

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
        <ListgroupItem href={undefined} class={itemClass} {iconClass} {active} {horizontal} {onclick}>{item}</ListgroupItem>
      {:else}
        <ListgroupItem href={item.href} class={itemClass} {iconClass} {active} {horizontal} {...item} onclick={item.onclick ?? onclick} />
      {/if}
    {/each}
  {:else}
    {@render children?.(items?.[0])}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[ListgroupProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L850)
## Props
@prop children
@prop items
@prop active
@prop onclick
@prop horizontal
@prop rounded
@prop border
@prop class: className
@prop itemClass
@prop iconClass
@prop ...restProps
-->
