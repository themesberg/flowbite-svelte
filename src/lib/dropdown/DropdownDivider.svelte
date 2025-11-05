<script lang="ts">
  import { dropdownDivider } from "./theme";
  import clsx from "clsx";
  import type { DropdownDividerProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, ...restProps }: DropdownDividerProps = $props();

  const theme = getTheme("dropdownDivider");
</script>

<div {...restProps} class={dropdownDivider({ class: clsx(theme, className) })}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L640)
## Props
@prop class: className
@prop ...restProps
-->
