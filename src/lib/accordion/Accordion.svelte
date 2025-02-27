<script lang="ts">
  import { setContext, getContext } from "svelte";
  import { type AccordionProps as Props, accordion } from "./";

  let { children, flush, activeClass, inactiveClass, isSingle = true, class: className, ...restProps }: Props = $props();

  // Get merged theme from context
  const context = getContext<Record<string, object>>("themeConfig");
  // Use context theme if available, otherwise fallback to default
  const accordionTheme = context?.accordion || accordion;

  const ctx = {
    flush,
    activeClass,
    inactiveClass,
    isSingle
  };

  setContext("ctx", ctx);

  const base = $derived(accordionTheme({ flush, className }));
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
@props:isSingle: any = true;
@props:class: string;
-->
