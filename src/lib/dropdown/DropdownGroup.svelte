<script lang="ts">
  import { dropdownGroup } from "./theme";
  import clsx from "clsx";
  import type { DropdownGroupProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();

  const theme = getTheme("dropdownGroup");
</script>

<ul {...restProps} class={dropdownGroup({ class: clsx(theme, className) })}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L654)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
