<script lang="ts">
  import clsx from "clsx";
  import { writable } from "svelte/store";
  import { setContext } from "svelte";
  import { tabs } from ".";
  import type { TabsProps, TabCtxType } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, tabStyle = "none", ulClass, contentClass, divider = true, class: className, classes, ...restProps }: TabsProps = $props();

  // base, content, divider, active, inactive
  warnThemeDeprecation("Tabs", { ulClass, contentClass }, { ulClass: "class", contentClass: "content" });
  const styling = $derived(classes ?? { content: contentClass });

  const theme = getTheme("tabs");

  const { base, content, divider: dividerClass } = $derived(tabs({ tabStyle, hasDivider: divider }));

  // Generate a unique ID for the tab panel
  const panelId = `tab-panel-${Math.random().toString(36).substring(2)}`;

  const ctx: TabCtxType = {
    get tabStyle() {
      return tabStyle;
    },
    selected: writable<HTMLElement>(),
    panelId // Add panelId to the context
  };

  let dividerBool = $derived(["full", "pill"].includes(tabStyle) ? false : divider);

  setContext("ctx", ctx);

  function init(node: HTMLElement) {
    const destroy = ctx.selected.subscribe((x: HTMLElement) => {
      if (x) node.replaceChildren(x);
    });
    return { destroy };
  }
</script>

<ul role="tablist" {...restProps} class={base({ class: clsx(theme?.base, className ?? ulClass) })}>
  {@render children()}
</ul>
{#if dividerBool}
  <div class={dividerClass({ class: clsx(theme?.divider, classes?.divider) })}></div>
{/if}
<div id={panelId} class={content({ class: clsx(theme?.content, styling.content) })} role="tabpanel" aria-labelledby={panelId} use:init></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TabsProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1717)
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
