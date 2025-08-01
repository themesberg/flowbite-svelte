<script lang="ts">
  import { type AccordionProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setContext } from "svelte";
  import { accordion } from "./";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, transitionType, ...restProps }: AccordionProps = $props();

  const theme = getTheme("accordion");

  const ctx = $state({
    flush,
    activeClass,
    inactiveClass,
    selected: multiple ? null : undefined
  });

  setContext("ctx", ctx);
  setContext("ctxTransitionType", transitionType);
  const base = $derived(accordion({ flush, class: clsx(theme, className) }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L179)
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
