<script lang="ts">
  import clsx from "clsx";
  import { dropdownHeader } from ".";
  import type { DropdownHeaderProps } from "$lib/types";

  let { children, class: className, ...restProps }: DropdownHeaderProps = $props();
  let headerClass = $derived(dropdownHeader({ class: clsx(className) }));
</script>

<div {...restProps} class={headerClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[DropdownHeaderProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L576)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
