<script lang="ts">
  import { setContext } from "svelte";
  import { writable } from "svelte/store";
  import { accordion } from "./";
  import { type AccordionProps, cn } from "$lib";
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
  const base = $derived(cn(accordion({ flush }), className));
  const finalClass = $derived(cn(base, theme));
</script>

<div {...restProps} class={finalClass}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L158)
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
