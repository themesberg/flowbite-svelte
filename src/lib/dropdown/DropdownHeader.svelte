<script lang="ts">
  import { dropdownHeader } from ".";
  import clsx from "clsx";
  import { type DropdownHeaderProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();

  const theme = getTheme("dropdownHeader");
</script>

<div {...restProps} class={dropdownHeader({ class: clsx(theme, className) })}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L589)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
