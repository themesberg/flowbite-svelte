<script lang="ts">
  import { setContext } from "svelte";
  import { listGroup } from ".";
  import clsx from "clsx";
  import { type ListgroupProps, ListgroupItem } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, items, active, onclick, horizontal, rounded, border, class: className, itemClass, iconClass, ...restProps }: ListgroupProps = $props();

  const theme = getTheme("listGroup");

  const base = $derived(listGroup({ rounded, border, horizontal, class: clsx(theme, className) }));

  let tag = active ? "div" : "ul";
  setContext("listGrpActive", active);
  setContext("listGrpHorizontal", horizontal);

  function createItemClickHandler(item: any) {
    return function (event: MouseEvent) {
      if (onclick) {
        // Create an event with the item data in the detail property
        const itemClickEvent = { ...event, detail: item };
        onclick(itemClickEvent);
      }
    };
  }
</script>

<svelte:element this={tag} {...restProps} class={base}>
  {#if items?.length}
    {#each items as item}
      {#if children}
        {@render children(item)}
      {:else if typeof item === "string"}
        <ListgroupItem href={undefined} class={clsx(itemClass)} iconClass={clsx(iconClass)} {active} {horizontal} onclick={createItemClickHandler(item)}>{item}</ListgroupItem>
      {:else}
        <ListgroupItem href={item.href} class={clsx(itemClass)} iconClass={clsx(iconClass)} {active} {horizontal} {...item} onclick={item.onclick ?? createItemClickHandler(item)} />
      {/if}
    {/each}
  {:else}
    {@render children?.(items?.[0] ?? "")}
  {/if}
</svelte:element>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ListgroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1024)
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
