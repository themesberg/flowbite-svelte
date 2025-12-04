<script lang="ts">
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import type { SelectedTab, TabCtxType, TabsProps } from "$lib/types";
  import { createSingleSelectionContext, useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { tabs } from "./theme";
  import { setTabsContext } from "$lib/context";

  let { children, selected = $bindable(), tabStyle = "none", ulClass, contentClass, divider = true, class: className, classes, ...restProps }: TabsProps = $props();

  const activeClasses = $derived(typeof classes?.active === "string" ? classes.active : undefined);

  $effect(() => {
    warnThemeDeprecation("Tabs", { ulClass, contentClass }, { ulClass: "class", contentClass: "content" });
  });

  const theme = getTheme("tabs");
  const styling = $derived(classes ?? { content: contentClass });
  const { base, content, divider: dividerClass } = $derived(tabs({ tabStyle, hasDivider: divider }));

  const uuid = $props.id();
  const panelId = `tab-panel-${uuid}`;
  const ctx = $derived<TabCtxType>({ tabStyle, panelId });
  const dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  createSingleSelectionContext<SelectedTab>();

  const tabRegistry = $state(new Map<string, SelectedTab>());
  let selectedTab: SelectedTab = $state({});

  const updateSelection = useSingleSelection<SelectedTab>((v) => {
    selectedTab = v ?? {};
    selected = v?.id;
  });

  // Handle external changes to selected
  $effect(() => {
    if (selected && selected !== selectedTab.id) {
      const targetTab = tabRegistry.get(selected);
      if (targetTab) {
        updateSelection(true, targetTab);
      }
    }
  });

  // Auto-select logic
  $effect(() => {
    if (tabRegistry.size > 0 && !selectedTab.id) {
      const targetTab = selected ? tabRegistry.get(selected) : tabRegistry.values().next().value;
      if (targetTab) {
        updateSelection(true, targetTab);
      }
    }
  });

  const registerFn = (tabData: SelectedTab) => {
    if (tabData.id) {
      tabRegistry.set(tabData.id, tabData);
    }
  };

  const unregisterFn = (tabId: string) => {
    tabRegistry.delete(tabId);
  };

  // Set context synchronously for SSR compatibility
  // Use getters to make the context reactive
  setTabsContext({
    get activeClasses() {
      return activeClasses;
    },
    get ctx() {
      return ctx;
    },
    registerTab: registerFn,
    unregisterTab: unregisterFn
  });
</script>

<ul role="tablist" {...restProps} class={base({ class: clsx(theme?.base, className ?? ulClass) })}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass({ class: clsx(theme?.divider, classes?.divider) })}></div>
{/if}

<div id={panelId} class={content({ class: clsx(theme?.content, styling.content) })} role="tabpanel" aria-labelledby={selectedTab.id}>
  {@render selectedTab.snippet?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1794)
## Props
@prop children
@prop selected = $bindable()
@prop tabStyle = "none"
@prop ulClass
@prop contentClass
@prop divider = true
@prop class: className
@prop classes
@prop ...restProps
-->
