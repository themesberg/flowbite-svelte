<script lang="ts">
  import clsx from "clsx";
  import { skeleton } from "./theme";
  import type { SkeletonProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { size = "sm", class: className, classes, ...restProps }: SkeletonProps = $props();

  const { wrapper, line } = $derived(skeleton({ size }));
  let wrapperCls = $derived(wrapper({ class: clsx(getTheme("skeleton")?.wrapper, className) }));
  let lineCls = $derived(
    line({
      class: clsx("mb-4 h-2.5 w-1/2", getTheme("skeleton")?.line, classes?.line)
    })
  );
  let lineCls2 = $derived(
    line({
      class: clsx("mb-2.5 h-2 w-9/12", getTheme("skeleton")?.line, classes?.line)
    })
  );
  let lineCls3 = $derived(line({ class: clsx("mb-2.5 h-2", getTheme("skeleton")?.line, classes?.line) }));
  let lineCls4 = $derived(
    line({
      class: clsx("mb-2.5 h-2 w-10/12", getTheme("skeleton")?.line, classes?.line)
    })
  );
  let lineCls5 = $derived(
    line({
      class: clsx("mb-2.5 h-2 w-11/12", getTheme("skeleton")?.line, classes?.line)
    })
  );
  let lineCls6 = $derived(line({ class: clsx("h-2 w-9/12", getTheme("skeleton")?.line, classes?.line) }));
</script>

<div role="status" {...restProps} class={wrapperCls}>
  <div class={lineCls}></div>
  <div class={lineCls2}></div>
  <div class={lineCls3}></div>
  <div class={lineCls3}></div>
  <div class={lineCls4}></div>
  <div class={lineCls5}></div>
  <div class={lineCls6}></div>
  <span class="sr-only">Loading...</span>
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[SkeletonProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1552)
## Props
@prop size = "sm"
@prop class: className
@prop classes
@prop ...restProps
-->
