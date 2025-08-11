<script lang="ts">
  import { type SelectedTab, type TabCtxType, type TabitemProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { tabItem, tabs } from ".";

  let { children, titleSlot, open = $bindable(false), title = "Tab title", activeClass, inactiveClass, class: className, classes, disabled, tabStyle, ...restProps }: TabitemProps = $props();

  const theme = getTheme("tabItem");

  const ctx: TabCtxType = getContext("ctx");
  let compoTabStyle = $derived(tabStyle ? tabStyle : ctx.tabStyle || "full");

  const { active, inactive } = $derived(tabs({ tabStyle: compoTabStyle, hasDivider: true }));

  // Generate a unique ID for this tab button
  const tabId = `tab-${Math.random().toString(36).substring(2)}`;

  const updateSingleSelection = useSingleSelection<SelectedTab>((value) => (open = value.id === tabId));

  $effect(() => {
    // monitor if open changes out side of that component
    updateSingleSelection?.(open, { snippet: children, id: tabId });
  });

  const { base, button } = $derived(tabItem({ open, disabled }));
</script>

<li {...restProps} class={base({ class: clsx(theme?.base, className) })} role="presentation">
  <button type="button" onclick={() => (open = true)} role="tab" id={tabId} aria-controls={ctx.panelId} aria-selected={open} {disabled} class={button({ class: clsx(open ? (activeClass ?? active()) : (inactiveClass ?? inactive()), theme?.button, classes?.button) })}>
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabitemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1710)
## Props
@prop children
@prop titleSlot
@prop open = $bindable(false)
@prop title = "Tab title"
@prop activeClass
@prop inactiveClass
@prop class: className
@prop classes
@prop disabled
@prop tabStyle
@prop ...restProps
-->
