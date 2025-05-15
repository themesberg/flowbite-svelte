<script lang="ts">
  import clsx from "clsx";
  import { helper } from ".";
  import type { HelperProps } from "$lib/types";

  let { children, class: className, color = "gray", ...restProps }: HelperProps = $props();

  const base = $derived(helper({ color, class: clsx(className) }));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[HelperProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L731)
## Props
@prop children
@prop class: className
@prop color = "gray"
@prop ...restProps
-->
