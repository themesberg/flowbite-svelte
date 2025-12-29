<script lang="ts">
  import type { AccordionItemProps, ParamsType } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { getAccordionContext } from "$lib/context";
  import { slide } from "svelte/transition";
  import { prefersReducedMotion } from "svelte/motion";
  import { accordionItem } from "./theme";

  let { children, header, arrowup, arrowdown, open = $bindable(false), transitionType = slide, transitionParams, class: className, classes }: AccordionItemProps = $props();

  // Get context - it will be undefined if used outside Accordion
  const ctx = getAccordionContext();
  // Merge context and local classes (local overrides context).
  // Theme is applied in template via clsx with lowest priority.
  const finalClasses = $derived({
    button: classes?.button || ctx?.classes?.button,
    contentWrapper: classes?.contentWrapper || ctx?.classes?.contentWrapper,
    content: classes?.content || ctx?.classes?.content,
    active: classes?.active || ctx?.classes?.active,
    inactive: classes?.inactive || ctx?.classes?.inactive
  });

  const ctxTransitionType = $derived(ctx?.transitionType ?? transitionType);
  // Check if transitionType is explicitly set to undefined in props
  const useTransition = $derived(transitionType === "none" ? false : ctxTransitionType === "none" ? false : true);

  // Get respectReducedMotion from context (defaults to true)
  const ctxRespectReducedMotion = $derived(ctx?.respectReducedMotion ?? true);

  // Merge transition params with reduced motion handling
  // Only check prefersReducedMotion in the browser to avoid SSR issues
  const isBrowser = typeof window !== 'undefined';
  const effectiveTransitionParams = $derived(isBrowser && ctxRespectReducedMotion && prefersReducedMotion.current ? { duration: 0, ...transitionParams } : transitionParams);

  // Theme context
  const theme = $derived(getTheme("accordionItem"));

  // single selection
  const self = Symbol("accordion-item");

  const updateSingleSelection = useSingleSelection<symbol>((value) => (open = value === self));

  $effect(() => {
    updateSingleSelection(open, self);
  });

  const handleToggle = () => {
    open = !open;
  };

  const { base, button, contentWrapper, content, active, inactive } = $derived(accordionItem({ flush: ctx?.flush, open }));

  let buttonClass = $derived(clsx(open && !ctx?.flush && (finalClasses.active || active()), !open && !ctx?.flush && (finalClasses.inactive || inactive())));

  let contentWrapperCls = $derived(clsx(contentWrapper(), open ? "block" : "hidden", finalClasses.contentWrapper));
</script>

<h2 class={base({ class: clsx(theme?.base, className) })}>
  <button type="button" onclick={handleToggle} class={button({ class: clsx(buttonClass, theme?.button, finalClasses.button) })} aria-expanded={open}>
    {#if header}
      {@render header()}
      {#if open}
        {#if !arrowup}
          <svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
          </svg>
        {:else}
          {@render arrowup()}
        {/if}
      {:else if !arrowdown}
        <svg class="h-3 w-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
        </svg>
      {:else}
        {@render arrowdown()}
      {/if}
    {/if}
  </button>
</h2>

{#if useTransition}
  {#if open && transitionType !== "none"}
    <div class={contentWrapperCls} transition:transitionType={effectiveTransitionParams as ParamsType}>
      <div class={content({ class: clsx(theme?.content, finalClasses.content) })}>
        {@render children()}
      </div>
    </div>
  {/if}
{:else}
  <div class={contentWrapperCls}>
    <div class={content({ class: clsx(theme?.content, finalClasses.content) })}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L214)
## Props
@prop children
@prop header
@prop arrowup
@prop arrowdown
@prop open = $bindable(false)
@prop transitionType = slide
@prop transitionParams
@prop class: className
@prop classes
-->
