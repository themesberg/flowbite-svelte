<script lang="ts">
  import clsx from "clsx";
  import { mark } from "./index";
  import type { MarkProps } from "$lib/types";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, ...restProps }: MarkProps = $props();

  const theme = getTheme("mark");
</script>

<mark {...restProps} class={mark({ class: clsx(theme, className) })}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MarkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1950)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
