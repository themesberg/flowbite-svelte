<script lang="ts">
  import { setContext } from "svelte";
  import { type TimelineProps as Props, timeline } from ".";
  import clsx from "clsx";
  import type { TimelineVariants } from "./theme";

  let { children, order = "default", class: className, ...restProps }: Props = $props();

  setContext<TimelineVariants["order"]>("order", order);
  const olCls = $derived(timeline({ order, class: clsx(className) }));
</script>

<ol {...restProps} class={olCls}>
  {@render children()}
</ol>

<!--
@component
[Go to docs](https://flowbite-svelte-next.com/)
## Props
@props: children: any;
@props:order: any = "default";
@props:class: string;
-->
