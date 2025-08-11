<script lang="ts">
  import clsx from "clsx";
  import { sidebarCta } from ".";
  import type { SidebarCtaProps } from "$lib/types";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { children, icon, divClass, spanClass, label, class: className, classes, ...restProps }: SidebarCtaProps = $props();

  warnThemeDeprecation("SidebarCta", { divClass, spanClass }, { divClass: "div", spanClass: "span" });
  const styling = $derived(
    classes ?? {
      div: divClass,
      span: spanClass
    }
  );

  const theme = getTheme("sidebarCta");

  const { base, div, span } = $derived(sidebarCta());
</script>

<div {...restProps} id="dropdown-cta" class={base({ class: clsx(theme?.base, className) })} role="alert">
  <div class={div({ class: clsx(theme?.div, styling.div) })}>
    <span class={span({ class: clsx(theme?.span, styling.span) })}>{label}</span>
    {#if icon}
      {@render icon()}
    {/if}
  </div>
  {@render children?.()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1355)
## Props
@prop children
@prop icon
@prop divClass
@prop spanClass
@prop label
@prop class: className
@prop classes
@prop ...restProps
-->
