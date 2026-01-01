<script lang="ts">
  import type { SelectedTab, TabCtxType, TabitemProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { tabItem, tabs } from "./theme";
  import { getTabsContext } from "$lib/context";

  let { children, titleSlot, open = $bindable(false), title = "Tab title", key, activeClass, inactiveClass, class: className, classes, disabled, tabStyle, ...restProps }: TabitemProps = $props();

  const theme = $derived(getTheme("tabItem"));
  const tabsCtx = getTabsContext();

  if (!tabsCtx) {
    throw new Error("TabItem must be used within a Tabs component");
  }

  const activeClasses = tabsCtx.activeClasses;
  const ctx: TabCtxType = tabsCtx.ctx;

  const compoTabStyle = $derived(tabStyle ?? ctx.tabStyle ?? "full");
  const { active, inactive } = $derived(tabs({ tabStyle: compoTabStyle, hasDivider: true }));

  const tabId = $props.id();
  const tabIdentifier = $derived(key ?? tabId);
  const self = $derived<SelectedTab>({ id: tabIdentifier, snippet: children });

  const registerTab = tabsCtx.registerTab;
  const unregisterTab = tabsCtx.unregisterTab;

  const updateSingleSelection = useSingleSelection<SelectedTab>((value) => (open = value?.id === self.id));

  $effect(() => {
    updateSingleSelection(open, self);
    registerTab?.(self);

    return () => {
      if (self.id) {
        unregisterTab?.(self.id);
      }
    };
  });

  const { base, button } = $derived(tabItem({ open, disabled }));
</script>

<li {...restProps} class={base({ class: clsx(theme?.base, className) })} role="presentation" data-scope="tab-item" data-part="base">
  <button
    type="button"
    onclick={() => (open = true)}
    role="tab"
    id={self.id}
    aria-controls={ctx.panelId}
    aria-selected={open}
    {disabled}
    class={button({
      class: clsx(open ? (activeClass ?? active({ class: activeClasses })) : (inactiveClass ?? inactive()), theme?.button, classes?.button)
    })}
    data-part="button"
  >
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
[TabitemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1711)
## Props
@prop children
@prop titleSlot
@prop open = $bindable(false)
@prop title = "Tab title"
@prop key
@prop activeClass
@prop inactiveClass
@prop class: className
@prop classes
@prop disabled
@prop tabStyle
@prop ...restProps
-->
