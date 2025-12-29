<script lang="ts">
  import { getSidebarContext, getActiveUrlContext } from "$lib/context";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import { sidebarItem } from "./theme";
  import type { SidebarItemProps } from "$lib/types";

  let { icon, subtext, href, label, active, class: className, classes, ...restProps }: SidebarItemProps = $props();

  const styling = $derived(classes);
  const theme = $derived(getTheme("sidebarItem"));

  const context = getSidebarContext() ?? { closeSidebar: undefined, activeClass: undefined, nonActiveClass: undefined };

  const activeUrl = getActiveUrlContext();

  let activeItem = $derived(active !== undefined ? active : activeUrl?.value ? href === activeUrl.value : false);

  const { base, link, span } = $derived(sidebarItem({ active: activeItem }));
</script>

<li class={base({ class: clsx(theme?.base, className) })}>
  <a onclick={context.closeSidebar ?? undefined} {...restProps} {href} aria-current={activeItem ? "page" : undefined} class={link({ class: clsx(theme?.link, styling?.link) })}>
    {#if icon}
      {@render icon()}
    {/if}
    <span class={span({ class: clsx(theme?.span, styling?.span) })}>{label}</span>
    {#if subtext}
      {@render subtext()}
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1417)
## Props
@prop icon
@prop subtext
@prop href
@prop label
@prop active
@prop class: className
@prop classes
@prop ...restProps
-->
