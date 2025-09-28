<script lang="ts">
  import clsx from "clsx";
  import type { SidebarGroupProps } from "$lib/types";

  let { children, class: className = "space-y-2", borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700", border = false, ...restProps }: SidebarGroupProps = $props();
</script>

<ul {...restProps} class={border ? clsx(borderClass) : clsx(className)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1417)
## Props
@prop children
@prop class: className = "space-y-2"
@prop borderClass = "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700"
@prop border = false
@prop ...restProps
-->
