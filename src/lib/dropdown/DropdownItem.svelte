<script lang="ts">
  import { getDropdownContext } from "$lib/context";
  import { dropdownItem } from "./theme";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import type { DropdownItemProps } from "$lib/types";
  import { untrack } from "svelte";

  let { aClass, children, activeClass, liClass, classes, class: className, href, onclick, ...restProps }: DropdownItemProps = $props();

  warnThemeDeprecation(
    "DropdownItem",
    untrack(() => ({ aClass, activeClass, liClass })),
    { aClass: "class", activeClass: "active", liClass: "li" }
  );

  const styling = $derived(classes ?? { active: activeClass, li: liClass });

  const theme = $derived(getTheme("dropdownItem"));

  const ctx = getDropdownContext();

  let isActive = $derived(ctx?.activeUrl && href ? href === ctx.activeUrl : false);

  const { base, active, li } = dropdownItem();
  let finalClass = $derived(isActive ? active({ class: clsx(theme?.active, styling.active) }) : base({ class: clsx(theme?.base, className) }));
</script>

<li class={li({ class: clsx(styling.li) })}>
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
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L705)
## Props
@prop aClass
@prop children
@prop activeClass
@prop liClass
@prop classes
@prop class: className
@prop href
@prop onclick
@prop ...restProps
-->
