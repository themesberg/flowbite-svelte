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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[SecondaryProps](https://github.com/themesberg/flowbite-svelte-next/blob/main/src/lib/types.ts#L1593)
## Props
@prop children
@prop class: className
@prop ...restProps
-->
