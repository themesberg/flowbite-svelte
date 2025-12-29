<script lang="ts">
  import clsx from "clsx";
  import { mark } from "./theme";
  import type { MarkProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, ...restProps }: MarkProps = $props();

  const theme = $derived(getTheme("mark"));
</script>

<mark {...restProps} class={mark({ class: clsx(theme, className) })}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MarkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2013)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
