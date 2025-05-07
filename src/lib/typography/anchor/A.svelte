<script lang="ts">
  import clsx from "clsx";
  import { anchor } from "./index";
  import type { AnchorProps } from "$lib/types";

  let { children, color = "primary", class: className, ...restProps }: AnchorProps = $props();
  let linkClass = $derived(anchor({ color, class: clsx(className) }));
</script>

<a {...restProps} class={linkClass}>
  {@render children()}
</a>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AnchorProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1585)
## Props
@prop children
@prop color = "primary"
@prop class: className
@prop ...restProps
-->
