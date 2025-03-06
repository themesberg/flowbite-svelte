<script lang="ts">
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";
  import { type AccordionProps as Props, accordion } from "./";
  import type { BaseThemes } from "$lib/theme";
  import clsx from "clsx";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, ...restProps }: Props = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const accordionTheme = context?.accordion || accordion;

  const ctx = {
    flush,
    activeClass,
    inactiveClass,
    selected: multiple ? undefined : writable()
  };

  setContext("ctx", ctx);
  const base = $derived(accordionTheme({ flush, class: clsx(className) }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@props: children: any;
@props:flush: any;
@props:activeClass: any;
@props:inactiveClass: any;
@props:multiple: any = false;
@props:class: string;
-->
