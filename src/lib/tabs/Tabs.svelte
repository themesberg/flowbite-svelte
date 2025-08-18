<script lang="ts">
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import type { SelectedTab, TabCtxType, TabsProps } from "$lib/types";
  import { createSingleSelectionContext, useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { setContext, type Snippet } from "svelte";
  import { tabs } from ".";

  let { children, tabStyle = "none", ulClass, contentClass, divider = true, class: className, classes, ...restProps }: TabsProps = $props();

  // base, content, divider, active, inactive
  warnThemeDeprecation("Tabs", { ulClass, contentClass }, { ulClass: "class", contentClass: "content" });
  const styling = $derived(classes ?? { content: contentClass });

  const theme = getTheme("tabs");

  const { base, content, divider: dividerClass } = $derived(tabs({ tabStyle, hasDivider: divider }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;

  const ctx: TabCtxType = $state({
    tabStyle,
    selected: undefined,
    panelId // Add panelId to the context
  });

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  setContext("ctx", ctx);

  createSingleSelectionContext<SelectedTab>();

  let selected: SelectedTab = $state({});
  useSingleSelection<SelectedTab>((v) => (selected = v));
</script>

<ul role="tablist" {...restProps} class={base({ class: clsx(theme?.base, className ?? ulClass) })}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass({ class: clsx(theme?.divider, classes?.divider) })}></div>
{/if}
<div id={panelId} class={content({ class: clsx(theme?.content, styling.content) })} role="tabpanel" aria-labelledby={selected.id}>
  {@render selected.snippet?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1706)
## Props
@prop children
@prop tabStyle = "none"
@prop ulClass
@prop contentClass
@prop divider = true
@prop class: className
@prop classes
@prop ...restProps
-->
