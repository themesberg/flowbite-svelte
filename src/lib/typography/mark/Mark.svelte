<script lang="ts">
  import clsx from "clsx";
  import { mark } from "./index";
  import type { MarkProps } from "$lib/types";

  let { children, class: className, ...restProps }: MarkProps = $props();
</script>

<mark {...restProps} class={mark({ class: clsx(className) })}>
  {@render children()}
</mark>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[MarkProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1790)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
