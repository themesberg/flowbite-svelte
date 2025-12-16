<script lang="ts">
  import { dropdownDivider } from "./theme";
  import clsx from "clsx";
  import type { DropdownDividerProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { class: className, ...restProps }: DropdownDividerProps = $props();
</script>

<div {...restProps} class={dropdownDivider({ class: clsx(getTheme("dropdownDivider"), className) })}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L699)
## Props
@prop class: className
@prop ...restProps
-->
