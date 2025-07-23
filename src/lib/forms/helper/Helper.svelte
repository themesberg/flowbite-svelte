<script lang="ts">
  import { helper } from ".";
  import { type HelperProps } from "$lib";
  import clsx from "clsx";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, class: className, color = "gray", ...restProps }: HelperProps = $props();

  const theme = getTheme("helper");

  const base = $derived(helper({ color, class: clsx(theme, className) }));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HelperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L743)
## Props
@prop children
@prop class: className
@prop color = "gray"
@prop ...restProps
-->
