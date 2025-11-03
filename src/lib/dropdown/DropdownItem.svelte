<script lang="ts">
  import { getContext } from "svelte";
  import { dropdownItem } from "./theme";
  import clsx from "clsx";
  import type { DropdownItemProps } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";

  let { aClass, children, activeClass, liClass, classes, class: className, ...restProps }: DropdownItemProps = $props();

  warnThemeDeprecation("DropdownItem", { aClass, activeClass, liClass }, { aClass: "class", activeClass: "active", liClass: "li" });
  const styling = $derived(classes ?? { active: activeClass, li: liClass });

  const theme = getTheme("dropdownItem");

  const activeUrl: { value: string } = getContext("activeUrl");

  let isActive = $derived(activeUrl?.value ? restProps.href === activeUrl.value : false);

  const { base, active, li } = dropdownItem();
  let finalClass = $derived([isActive ? active({ class: clsx(theme?.active, styling.active) }) : base({ class: clsx(theme?.base, className) })]);
</script>

<li class={li({ class: clsx(styling.li) })}>
  {#if restProps.href === undefined && restProps.onclick === undefined}
    <div {...restProps} class={finalClass}>
      {@render children()}
    </div>
  {:else if restProps.href === undefined}
    <button type="button" {...restProps} class={finalClass}>
      {@render children()}
    </button>
  {:else}
    <a {...restProps} class={finalClass}>
      {@render children()}
    </a>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L647)
## Props
@prop aClass
@prop children
@prop activeClass
@prop liClass
@prop classes
@prop class: className
@prop ...restProps
-->
