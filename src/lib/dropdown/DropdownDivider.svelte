<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { dropdownDivider } from "./";
  import type { DropdownDividerProps } from "$lib/types";

  let { class: className, ...restProps }: DropdownDividerProps = $props();
</script>

<div {...restProps} class={twMerge(dropdownDivider(), clsx(className))}></div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownDividerProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L612)
## Props
@prop class: divClass
@prop ...restProps
-->
