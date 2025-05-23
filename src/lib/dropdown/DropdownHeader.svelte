<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { dropdownHeader } from ".";
  import type { DropdownHeaderProps } from "$lib/types";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();
</script>

<div {...restProps} class={twMerge(dropdownHeader(), clsx(className))}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L614)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
