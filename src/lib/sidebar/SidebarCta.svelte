<script lang="ts">
  import clsx from "clsx";
  import { sidebarCta } from "./theme";
  import type { SidebarCtaProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, icon, label, class: className, classes, ...restProps }: SidebarCtaProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("sidebarCta"));

  const { base, labelWrapper, badge } = $derived(sidebarCta());
</script>

<div {...restProps} id="dropdown-cta" data-scope="sidebar-cta" data-part="base" class={base({ class: clsx(theme?.base, className) })} role="alert">
  <div data-part="label-wrapper" class={labelWrapper({ class: clsx(theme?.labelWrapper, styling?.labelWrapper) })}>
    <span data-part="badge" class={badge({ class: clsx(theme?.badge, styling?.badge) })}>{label}</span>
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
[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1350)
## Props
@prop children
@prop icon
@prop label
@prop class: className
@prop classes
@prop ...restProps
-->
