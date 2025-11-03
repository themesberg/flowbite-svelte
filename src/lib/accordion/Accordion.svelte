<script lang="ts">
  import type { AccordionCtxType, AccordionProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { accordion } from "./theme";
  import { createSingleSelectionContext } from "$lib/utils/singleselection.svelte";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, transitionType, ...restProps }: AccordionProps = $props();

  const theme = getTheme("accordion");

  const ctx: AccordionCtxType = $state({
    flush,
    activeClass,
    inactiveClass,
    transitionType
  });

  setContext<AccordionCtxType>("ctx", ctx);

  createSingleSelectionContext(multiple);

  const base = $derived(accordion({ flush, class: clsx(theme, className) }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L205)
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
