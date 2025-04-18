<script lang="ts">
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";
  import { accordion } from "./";
  import type { AccordionProps, BaseThemes } from "$lib/types";
  import clsx from "clsx";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, ...restProps }: AccordionProps = $props();

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
[Go to docs](https://flowbite-svelte-next.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L188)
## Props
@prop children
@prop flush
@prop activeClass
@prop inactiveClass
@prop multiple = false
@prop class: className
@prop ...restProps
-->
