<script lang="ts">
  import { setContext } from "svelte";
  import { timeline, type TimelineVariants } from "./theme";
  import clsx from "clsx";
  import type { TimelineProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, order = "default", class: className, ...restProps }: TimelineProps = $props();

  const theme = $derived(getTheme("timeline"));

  $effect(() => {
    setContext<TimelineVariants["order"]>("order", order);
  });
  const olCls = $derived(timeline({ order, class: clsx(theme, className) }));
</script>

<ol {...restProps} class={olCls}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimelineProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1953)
## Props
@prop children
@prop order = "default"
@prop class: className
@prop ...restProps
-->
