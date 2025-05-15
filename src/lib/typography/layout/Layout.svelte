<script lang="ts">
  import clsx from "clsx";
  import { layout } from "./index";
  import type { LayoutProps } from "$lib/types";

  let { children, class: className, ...restProps }: LayoutProps = $props();

  let classDiv = $derived(layout({ class: clsx(className) }));
</script>

<div {...restProps} class={classDiv}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[LayoutProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1771)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
