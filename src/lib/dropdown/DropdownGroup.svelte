<script lang="ts">
  import clsx from "clsx";
  import { dropdownGroup } from ".";
  import type { DropdownGroupProps } from "$lib/types";

  let { children, class: className, ...restProps }: DropdownGroupProps = $props();

  const ulCls = $derived(dropdownGroup({ class: clsx(className) }));
</script>

<ul {...restProps} class={ulCls}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L591)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
