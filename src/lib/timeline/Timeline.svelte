<script lang="ts">
  import { setContext } from "svelte";
  import { timeline } from ".";
  import clsx from "clsx";
  import type { TimelineProps, TimelineVariants } from "$lib/types";

  let { children, order = "default", class: className, ...restProps }: TimelineProps = $props();

  setContext<TimelineVariants["order"]>("order", order);
  const olCls = $derived(timeline({ order, class: clsx(className) }));
</script>

<ol {...restProps} class={olCls}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[TimelineProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L1645)
## Props
@prop children
@prop order = "default"
@prop class: className
@prop ...restProps
-->
