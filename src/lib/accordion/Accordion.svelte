<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { accordion } from "./";
  import clsx from "clsx";
  import { type AccordionProps } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, transitionType, ...restProps }: AccordionProps = $props();

  const theme = getTheme("accordion");

  const ctx = {
    flush,
    activeClass,
    inactiveClass,
    selected: multiple ? undefined : writable()
  };

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
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L168)
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
