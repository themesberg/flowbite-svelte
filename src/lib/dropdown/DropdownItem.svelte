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

  const { base, active, li } = dropdownItem();
  let finalClass = $derived(isActive ? active({ class: clsx(theme?.active, styling?.active) }) : base({ class: clsx(theme?.base, className) }));
</script>

<li class={li({ class: clsx(theme?.li, styling?.li) })}>
  {#if href}
    <a {href} {onclick} {...restProps} class={finalClass}>
      {@render children()}
    </a>
  {:else if onclick}
    <button type="button" {onclick} {...restProps} class={finalClass}>
      {@render children()}
    </button>
  {:else}
    <div {...restProps} class={finalClass}>
      {@render children()}
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L660)
## Props
@prop children
@prop classes
@prop class: className
@prop href
@prop onclick
@prop ...restProps
-->
