<script lang="ts">
  import clsx from "clsx";
  import { skeleton, type SkeletonTheme } from ".";
  import type { SkeletonProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "sm", class: className, ...restProps }: SkeletonProps = $props();

  const theme = getTheme("skeleton");

  const { wrapper, line } = $derived(skeleton({ size }));
</script>

<div role="status" {...restProps} class={wrapper({ class: clsx(className, (theme as SkeletonTheme)?.wrapper) })}>
  <div
    class={line({
      class: clsx("mb-4 h-2.5 w-1/2", (theme as SkeletonTheme)?.line)
    })}
  ></div>
  <div
    class={line({
      class: clsx("mb-2.5 h-2 w-9/12", (theme as SkeletonTheme)?.line)
    })}
  ></div>
  <div class={line({ class: clsx("mb-2.5 h-2", (theme as SkeletonTheme)?.line) })}></div>
  <div class={line({ class: clsx("mb-2.5 h-2", (theme as SkeletonTheme)?.line) })}></div>
  <div
    class={line({
      class: clsx("mb-2.5 h-2 w-10/12", (theme as SkeletonTheme)?.line)
    })}
  ></div>
  <div
    class={line({
      class: clsx("mb-2.5 h-2 w-11/12", (theme as SkeletonTheme)?.line)
    })}
  ></div>
  <div class={line({ class: clsx("h-2 w-9/12", (theme as SkeletonTheme)?.line) })}></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1416)
## Props
@prop size = "sm"
@prop class: className
@prop ...restProps
-->
