<script lang="ts">
  import { getSidebarContext, getActiveUrlContext } from "$lib/context";
  import clsx from "clsx";
  import type { SidebarItemProps } from "$lib/types";

  let { icon, subtext, href, label, spanClass = "ms-3", activeClass, nonActiveClass, aClass, active, class: className, ...restProps }: SidebarItemProps = $props();

  const context = getSidebarContext() ?? { closeSidebar: undefined, activeClass: undefined, nonActiveClass: undefined };

  const activeUrl = getActiveUrlContext();

  let activeItem = $derived(active !== undefined ? active : activeUrl?.value ? href === activeUrl.value : false);

  let aCls = $derived(activeItem ? (activeClass ?? context.activeClass) : (nonActiveClass ?? context.nonActiveClass));
</script>

<li class={clsx(className)}>
  <a onclick={context.closeSidebar ?? undefined} {...restProps} {href} aria-current={activeItem ? "page" : undefined} class={clsx(aCls, aClass)}>
    {#if icon}
      {@render icon()}
    {/if}
    <span class={clsx(spanClass)}>{label}</span>
    {#if subtext}
      {@render subtext()}
    {/if}
  </a>
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1524)
## Props
@prop icon
@prop subtext
@prop href
@prop label
@prop spanClass = "ms-3"
@prop activeClass
@prop nonActiveClass
@prop aClass
@prop active
@prop class: className
@prop ...restProps
-->
