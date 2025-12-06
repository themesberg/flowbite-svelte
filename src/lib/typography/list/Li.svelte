<script lang="ts">
  import type { LiProps } from "$lib/types";
  import clsx from "clsx";
  import { getListContext } from "$lib/context";

  let { children, icon, class: className, ...restProps }: LiProps = $props();

  const ctx = getListContext();

  let liCls = $derived(clsx(ctx?.ctxClass, icon && "flex items-center", className));
</script>

<li {...restProps} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2117)
## Props
@prop children
@prop icon
@prop class: className
@prop ...restProps
-->
