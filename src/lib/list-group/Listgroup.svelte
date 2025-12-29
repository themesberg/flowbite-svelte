<script lang="ts">
  import { listGroup } from "./theme";
  import clsx from "clsx";
  import type { ListgroupProps } from "$lib";
  import ListgroupItem from "./ListgroupItem.svelte";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { setListGroupContext } from "$lib/context";

  let { children, items, active, onclick, horizontal, rounded, border, class: className, classes, ...restProps }: ListgroupProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("listGroup"));

  const { base, item: listItem, icon: listIcon } = $derived(listGroup({ rounded, border, horizontal }));

  let tag = $derived(active ? "div" : "ul");

  let listIconCls = $derived(listIcon({ class: clsx(theme?.icon, styling?.icon) }));

  // Create reactive context using getters
  const context = {
    get active() {
      return active;
    },
    get horizontal() {
      return horizontal;
    }
  };

  setListGroupContext(context);

  function createItemClickHandler() {
    return function (event: MouseEvent) {
      if (onclick) {
        onclick(event);
      }
    };
  }
</script>

<svelte:element this={tag} {...restProps} class={base({ class: clsx(theme?.base, className) })}>
  {#if items?.length}
    {#each items as item, i (i)}
      {#if children}
        {@render children(item)}
      {:else if typeof item === "string"}
        <ListgroupItem href={undefined} class={listItem({ class: clsx(theme?.item, styling?.item) })} classes={{ icon: listIconCls }} {active} {horizontal} onclick={createItemClickHandler()}>
          {item}
        </ListgroupItem>
      {:else}
        <ListgroupItem
          href={item.href}
          class={listItem({ class: clsx(theme?.item, styling?.item) })}
          classes={{ icon: listIconCls }}
          {active}
          {horizontal}
          {...item}
          onclick={item.onclick ?? createItemClickHandler()}
        />
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
[ListgroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1030)
## Props
@prop children
@prop items
@prop active
@prop onclick
@prop horizontal
@prop rounded
@prop border
@prop class: className
@prop classes
@prop ...restProps
-->
