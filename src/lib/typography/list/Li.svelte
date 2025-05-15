<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { getContext } from "svelte";
  import type { LiProps } from "$lib/types";
  import clsx from "clsx";

  let { children, icon, class: className, ...restProps }: LiProps = $props();

  const getCtxClass = getContext<() => string>("ctxClass");

  let liCls = $derived(twMerge(getCtxClass(), icon && "flex items-center", clsx(className)));
</script>

<li {...restProps} class={liCls}>
  {@render children()}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LiProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1784)
## Props
@prop children
@prop icon
@prop class: className
@prop ...restProps
-->
