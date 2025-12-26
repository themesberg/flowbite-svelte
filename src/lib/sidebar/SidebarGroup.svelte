<script lang="ts">
  import clsx from "clsx";
  import type { SidebarGroupProps } from "$lib/types";

  let { children, class: className = "space-y-2", border = false, ...restProps }: SidebarGroupProps = $props();
</script>

<ul {...restProps} class={border ? clsx("mt-4 border-t border-gray-200 pt-4 dark:border-gray-700", className) : clsx(className)}>
  {@render children()}
</ul>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SidebarGroupProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1458)
## Props
@prop children
@prop class: className = "space-y-2"
dark:border-gray-700"
@prop border = false
@prop ...restProps
-->
