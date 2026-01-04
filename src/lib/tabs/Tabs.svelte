<script lang="ts">
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { SelectedTab, TabCtxType, TabsProps } from "$lib/types";
  import { createSingleSelectionContext, useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { tabs } from "./theme";
  import { setTabsContext } from "$lib/context";

  let { children, selected = $bindable(), tabStyle = "none", divider = true, class: className, classes, ...restProps }: TabsProps = $props();

  const activeClasses = $derived(typeof classes?.active === "string" ? classes.active : undefined);

  const styling = $derived(classes);

  const theme = $derived(getTheme("tabs"));

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

  // Keyboard navigation handler for accessibility
  function handleKeydown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    if (target.getAttribute("role") !== "tab") return;

    const tabs = Array.from(target.closest('[role="tablist"]')?.querySelectorAll('[role="tab"]') || []) as HTMLElement[];
    const currentIndex = tabs.indexOf(target);

    let nextIndex = currentIndex;
    let attempts = 0; // Safety counter to prevent infinite loops

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        nextIndex = (currentIndex + 1) % tabs.length;
        // Skip disabled tabs
        attempts = 0;
        while (tabs[nextIndex]?.hasAttribute("disabled") && nextIndex !== currentIndex && attempts < tabs.length) {
          nextIndex = (nextIndex + 1) % tabs.length;
          attempts++;
        }
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        nextIndex = currentIndex - 1 < 0 ? tabs.length - 1 : currentIndex - 1;
        // Skip disabled tabs
        attempts = 0;
        while (tabs[nextIndex]?.hasAttribute("disabled") && nextIndex !== currentIndex && attempts < tabs.length) {
          nextIndex = nextIndex - 1 < 0 ? tabs.length - 1 : nextIndex - 1;
          attempts++;
        }
        break;
      case "Home":
        event.preventDefault();
        nextIndex = 0;
        // Find first non-disabled tab
        attempts = 0;
        while (tabs[nextIndex]?.hasAttribute("disabled") && nextIndex < tabs.length - 1 && attempts < tabs.length) {
          nextIndex++;
          attempts++;
        }
        break;
      case "End":
        event.preventDefault();
        nextIndex = tabs.length - 1;
        // Find last non-disabled tab
        attempts = 0;
        while (tabs[nextIndex]?.hasAttribute("disabled") && nextIndex > 0 && attempts < tabs.length) {
          nextIndex--;
          attempts++;
        }
        break;
      default:
        return;
    }

    if (nextIndex !== currentIndex && tabs[nextIndex]) {
      tabs[nextIndex].focus();
      tabs[nextIndex].click(); // Activate the tab
    }
  }
</script>

<ul role="tablist" {...restProps} class={base({ class: clsx(theme?.base, className) })} data-scope="tabs" data-part="base" onkeydown={handleKeydown}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass({ class: clsx(theme?.divider, styling?.divider) })} data-part="divider"></div>
{/if}

<div id={panelId} class={content({ class: clsx(theme?.content, styling?.content) })} role="tabpanel" aria-labelledby={selectedTab.id} data-part="content">
  {@render selectedTab.snippet?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1704)
## Props
@prop children
@prop selected = $bindable()
@prop tabStyle = "none"
@prop divider = true
@prop class: className
@prop classes
@prop ...restProps
-->
