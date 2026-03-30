<script lang="ts">
  import clsx from "clsx";
  import type { SidebarGroupProps } from "$lib/types";

  let { children, class: className = "space-y-2", border = false, ...restProps }: SidebarGroupProps = $props();
</script>

<ul {...restProps} class={border ? clsx("border-default mt-4 border-t pt-4", className) : clsx(className)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1383)
## Props
@prop children
@prop class: className = "space-y-2"
@prop border = false
@prop ...restProps
-->
