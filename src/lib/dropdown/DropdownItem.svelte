<script lang="ts">
  import { getDropdownContext } from "$lib/context";
  import { dropdownItem } from "./theme";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";
  import type { DropdownItemProps } from "$lib/types";

  let { children, classes, class: className, href, onclick, ...restProps }: DropdownItemProps = $props();

  const styling = $derived(classes);

  const theme = $derived(getTheme("dropdownItem"));

  const ctx = getDropdownContext();

  let isActive = $derived(ctx?.activeUrl && href ? href === ctx.activeUrl : false);

  const { base, active, item } = dropdownItem();
  let itemClass = $derived(isActive ? active({ class: clsx(theme?.active, styling?.active) }) : item({ class: clsx(theme?.item, styling?.item) }));
</script>

<li data-scope="dropdown-item" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  {#if href}
    <a data-part="item" {href} {onclick} {...restProps} class={itemClass}>
      {@render children()}
    </a>
  {:else if onclick}
    <button data-part="item" type="button" {onclick} {...restProps} class={itemClass}>
      {@render children()}
    </button>
  {:else}
    <div data-part="item" {...restProps} class={itemClass}>
      {@render children()}
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L668)
## Props
@prop children
@prop classes
@prop class: className
@prop href
@prop onclick
@prop ...restProps
-->
