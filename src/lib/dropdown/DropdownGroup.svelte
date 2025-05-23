<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import clsx from "clsx";
  import { dropdownGroup } from ".";
  import type { DropdownGroupProps } from "$lib/types";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();

</script>

<ul {...restProps} class={twMerge(dropdownGroup(), clsx(className))}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L629)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
