<script lang="ts">
  import { dropdownGroup } from "./theme";
  import clsx from "clsx";
  import type { DropdownGroupProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();

  const theme = $derived(getTheme("dropdownGroup"));
  const base = $derived(dropdownGroup({ class: clsx(theme, className) }));
</script>

<ul data-scope="dropdown-group" data-part="base" {...restProps} class={base}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L681)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
