<script lang="ts">
  import { dropdownHeader } from "./theme";
  import clsx from "clsx";
  import type { DropdownHeaderProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();

  const theme = $derived(getTheme("dropdownHeader"));
  const base = $derived(dropdownHeader({ class: clsx(theme, className) }));
</script>

<div data-scope="dropdown-header" data-part="base" {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L661)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
