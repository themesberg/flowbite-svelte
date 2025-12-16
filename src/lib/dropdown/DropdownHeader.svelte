<script lang="ts">
  import { dropdownHeader } from "./theme";
  import clsx from "clsx";
  import type { DropdownHeaderProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();
</script>

<div {...restProps} class={dropdownHeader({ class: clsx(getTheme("dropdownHeader"), className) })}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L701)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
