<script lang="ts">
  import clsx from "clsx";
  import { skeleton } from ".";
  import type { SkeletonProps } from "$lib/types";

  let { size = "sm", class: className, ...restProps }: SkeletonProps = $props();
  const { wrapper, line } = $derived(skeleton({ size }));
</script>

<div role="status" {...restProps} class={wrapper({ class: clsx(className) })}>
  <div class={line({ class: "mb-4 h-2.5 w-1/2" })}></div>
  <div class={line({ class: "mb-2.5 h-2 w-9/12" })}></div>
  <div class={line({ class: "mb-2.5 h-2" })}></div>
  <div class={line({ class: "mb-2.5 h-2" })}></div>
  <div class={line({ class: "mb-2.5 h-2 w-10/12" })}></div>
  <div class={line({ class: "mb-2.5 h-2 w-11/12" })}></div>
  <div class={line({ class: "h-2 w-9/12" })}></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1360)
## Props
@prop size = "sm"
@prop class: className
@prop ...restProps
-->
