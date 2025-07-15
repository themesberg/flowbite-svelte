<script lang="ts">
  import { getContext } from "svelte";
  import type { LiProps } from "$lib/types";
  import clsx from "clsx";
  import { cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, icon, class: className, ...restProps }: LiProps = $props();

  const theme = getTheme("li");

  const getCtxClass = getContext<() => string>("ctxClass");

  let liCls = $derived(cn(getCtxClass(), icon && "flex items-center", clsx(className), theme));
</script>

<li {...restProps} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1956)
## Props
@prop children
@prop icon
@prop class: className
@prop ...restProps
-->
