<script lang="ts">
  import clsx from "clsx";
  import { sidebarCta, type SidebarCtaTheme } from ".";
  import type { SidebarCtaProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, icon, divClass, spanClass, label, class: className, ...restProps }: SidebarCtaProps = $props();

  const theme = getTheme("sidebarCta");

  const { base, div, span } = $derived(sidebarCta());
</script>

<div {...restProps} id="dropdown-cta" class={base({class:clsx((theme as SidebarCtaTheme)?.base, className)})} role="alert">
  <div class={div({class:clsx((theme as SidebarCtaTheme)?.div, divClass)}) }>
    <span class={span({class:clsx((theme as SidebarCtaTheme)?.span, spanClass)}) }>{label}</span>
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
[SidebarCtaProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1371)
## Props
@prop children
@prop icon
@prop divClass
@prop spanClass
@prop label
@prop class: className
@prop ...restProps
-->
