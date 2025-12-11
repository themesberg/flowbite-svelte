<script lang="ts">
  import type { AccordionContextType, AccordionProps } from "$lib/types";
  import { getTheme } from "$lib/theme/themeUtils";
  import clsx from "clsx";
  import { setAccordionContext } from "$lib/context";
  import { accordion } from "./theme";
  import { createSingleSelectionContext } from "$lib/utils/singleselection.svelte";
  import { untrack } from "svelte";

  let { children, flush, activeClass, inactiveClass, multiple = false, class: className, transitionType, ...restProps }: AccordionProps = $props();

  const theme = getTheme("accordion");

  // Simple reactive state object
  const reactiveCtx: AccordionContextType = {
    get flush() {
      return flush;
    },
    get activeClass() {
      return activeClass;
    },
    get inactiveClass() {
      return inactiveClass;
    },
    get transitionType() {
      return transitionType;
    }
  };

  // Set context during initialization
  setAccordionContext(reactiveCtx);

  // Create selection context synchronously for proper nesting
  // Use untrack to explicitly capture only the initial value
  createSingleSelectionContext(untrack(() => multiple));

  const base = $derived(accordion({ flush, class: clsx(theme, className) }));
</script>

<div {...restProps} class={base}>
  {@render children()}
</div>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L199)
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
