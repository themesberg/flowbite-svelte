<script lang="ts">
  import { dropdownDivider } from "./theme";
  import clsx from "clsx";
  import type { DropdownDividerProps } from "$lib";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { class: className, ...restProps }: DropdownDividerProps = $props();

  const theme = $derived(getTheme("dropdownDivider"));
  const base = $derived(dropdownDivider({ class: clsx(theme, className) }));
</script>

<div data-scope="dropdown-divider" data-part="base" {...restProps} class={base}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L662)
## Props
@prop class: className
@prop ...restProps
-->
