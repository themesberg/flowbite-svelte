<script lang="ts">
  import clsx from "clsx";
  import { skeleton } from "./theme";
  import type { SkeletonProps } from "$lib/types";
  import { getTheme } from "$lib/theme-provider/themeUtils";

  let { size = "sm", class: className, classes, ...restProps }: SkeletonProps = $props();

  const theme = $derived(getTheme("skeleton"));

  const { base, skeletonLine } = $derived(skeleton({ size }));
</script>

<div role="status" {...restProps} data-scope="skeleton" data-part="base" class={base({ class: clsx(theme?.base, className) })}>
  <div
    data-part="skeleton-line"
    class={skeletonLine({
      class: clsx("mb-4 h-2.5 w-1/2", theme?.skeletonLine, classes?.skeletonLine)
    })}
  ></div>
  <div
    data-part="skeleton-line"
    class={skeletonLine({
      class: clsx("mb-2.5 h-2 w-9/12", theme?.skeletonLine, classes?.skeletonLine)
    })}
  ></div>
  <div data-part="skeleton-line" class={skeletonLine({ class: clsx("mb-2.5 h-2", theme?.skeletonLine, classes?.skeletonLine) })}></div>
  <div data-part="skeleton-line" class={skeletonLine({ class: clsx("mb-2.5 h-2", theme?.skeletonLine, classes?.skeletonLine) })}></div>
  <div
    data-part="skeleton-line"
    class={skeletonLine({
      class: clsx("mb-2.5 h-2 w-10/12", theme?.skeletonLine, classes?.skeletonLine)
    })}
  ></div>
  <div
    data-part="skeleton-line"
    class={skeletonLine({
      class: clsx("mb-2.5 h-2 w-11/12", theme?.skeletonLine, classes?.skeletonLine)
    })}
  ></div>
  <div data-part="skeleton-line" class={skeletonLine({ class: clsx("h-2 w-9/12", theme?.skeletonLine, classes?.skeletonLine) })}></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1412)
## Props
@prop size = "sm"
@prop class: className
@prop classes
@prop ...restProps
-->
