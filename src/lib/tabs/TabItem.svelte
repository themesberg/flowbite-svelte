<script lang="ts">
  import type { SelectedTab, TabCtxType, TabitemProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { tabItem, tabs } from "./theme";

  let { children, titleSlot, open = $bindable(false), title = "Tab title", key, activeClass, inactiveClass, class: className, classes, disabled, tabStyle, ...restProps }: TabitemProps = $props();

  const theme = getTheme("tabItem");
  const activeClasses = getContext<string>("activeClasses");
  const ctx: TabCtxType = getContext("ctx");

  const compoTabStyle = $derived(tabStyle ?? ctx.tabStyle ?? "full");
  const { active, inactive } = $derived(tabs({ tabStyle: compoTabStyle, hasDivider: true }));

  const tabId = $props.id();
  const tabIdentifier = key ?? tabId;
  const self: SelectedTab = { id: tabIdentifier, snippet: children };

  const registerTab = getContext<(tab: SelectedTab) => void>("registerTab");
  const unregisterTab = getContext<(tabId: string) => void>("unregisterTab");

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

<li {...restProps} class={base({ class: clsx(theme?.base, className) })} role="presentation">
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
[TabitemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1729)
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
