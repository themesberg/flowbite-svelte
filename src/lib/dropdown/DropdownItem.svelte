<script lang="ts">
  import { getContext } from "svelte";
  import { dropdownItem } from "./theme";
  import clsx from "clsx";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import type { DropdownItemProps } from "$lib/types";

  let { aClass, children, activeClass, liClass, classes, class: className, href, onclick, ...restProps }: DropdownItemProps = $props();

  warnThemeDeprecation("DropdownItem", { aClass, activeClass, liClass }, { aClass: "class", activeClass: "active", liClass: "li" });
  const styling = $derived(classes ?? { active: activeClass, li: liClass });

  const theme = getTheme("dropdownItem");

  const activeUrl: { value: string } = getContext("activeUrl");

  let isActive = $derived(activeUrl?.value && href ? href === activeUrl.value : false);

  const { base, active, li } = dropdownItem();
  let finalClass = $derived(isActive ? active({ class: clsx(theme?.active, styling.active) }) : base({ class: clsx(theme?.base, className) }));
</script>

<li class={li({ class: clsx(styling.li) })}>
  {#if href}
    <a {href} {...restProps} class={finalClass}>
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
## Props
@prop children - Content to render inside the dropdown item
@prop href - URL for anchor element (makes it an anchor)
@prop onclick - Click handler (makes it a button if no href)
@prop aClass - (Deprecated) Use `class` instead
@prop activeClass - (Deprecated) Use `classes.active` instead
@prop liClass - (Deprecated) Use `classes.li` instead
@prop classes - Object with active, base, and li class overrides
@prop class - Custom class for the item
@prop ...restProps - Additional HTML attributes
-->
