<script lang="ts">
  import clsx from "clsx";
  import { activity } from ".";
  import type { ActivityProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: ActivityProps = $props();

  const theme = getTheme("activity");
</script>

<ol {...restProps} class={cn(activity({ class: clsx(className) }), theme)}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ActivityProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1768)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
