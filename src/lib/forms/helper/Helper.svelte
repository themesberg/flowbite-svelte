<script lang="ts">
  import { helper } from "./theme";
  import type { HelperProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { children, class: className, color = "brand", ...restProps }: HelperProps = $props();

  const theme = $derived(getTheme("helper"));

  const base = $derived(helper({ color, class: clsx(theme, className) }));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HelperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L791)
## Props
@prop children
@prop class: className
@prop color = "brand"
@prop ...restProps
-->
