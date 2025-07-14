<script lang="ts">
  import clsx from "clsx";
  import { secondary } from "./index";
  import type { SecondaryProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: SecondaryProps = $props();

  const theme = getTheme("secondary");
</script>

<small {...restProps} class={cn(secondary({ class: clsx(className) }), theme)}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SecondaryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1974)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
