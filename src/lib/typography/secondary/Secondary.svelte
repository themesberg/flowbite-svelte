<script lang="ts">
  import clsx from "clsx";
  import { secondary } from "./index";
  import type { SecondaryProps } from "$lib/types";

  let { children, class: className, ...restProps }: SecondaryProps = $props();
</script>

<small {...restProps} class={secondary({ class: clsx(className) })}>
  {@render children()}
</small>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SecondaryProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1809)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
