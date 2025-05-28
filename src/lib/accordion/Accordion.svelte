<script lang="ts">
  import { setContext, getContext } from "svelte";
  import { writable } from "svelte/store";
  import { accordion } from "./";
  import { type AccordionProps, type BaseThemes, cn } from "$lib";

  let { children, flush, multiple = false, class: className, classes, transitionType, ...restProps }: AccordionProps = $props();

  // Get merged theme from context
  const context = getContext<BaseThemes>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const accordionTheme = context?.accordion || accordion;

  const ctx = {
    flush,
    activeClass: classes?.active,
    inactiveClass: classes?.inactive,
    selected: multiple ? undefined : writable()
  };

  setContext("ctx", ctx);
  setContext("ctxTransitionType", transitionType);
  const base = $derived(cn(accordionTheme({ flush }), className));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L160)
## Props
@prop children
@prop flush
@prop activeClass
@prop inactiveClass
@prop multiple = false
@prop class: className
@prop transitionType
@prop ...restProps
-->
