<script lang="ts">
  import type { AccordionItemProps, ParamsType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { getAccordionContext } from "$lib/context";
  import { slide } from "svelte/transition";
  import { accordionItem } from "./theme";
  import { untrack } from "svelte";

  let {
    children,
    header,
    arrowup,
    arrowdown,
    open = $bindable(false),
    activeClass,
    inactiveClass,
    transitionType = slide,
    transitionParams,
    class: className,
    classes,
    headerClass,
    contentClass
  }: AccordionItemProps = $props();

  warnThemeDeprecation(
    "AccordionItem",
    untrack(() => ({
      headerClass,
      contentClass,
      activeClass,
      inactiveClass
    })),
    {
      headerClass: "button",
      contentClass: "content",
      activeClass: "active",
      inactiveClass: "inactive"
    }
  );

  let styling: typeof classes = $derived(classes ?? { button: headerClass, content: contentClass, active: activeClass, inactive: inactiveClass });

  // Get context - it will be undefined if used outside Accordion
  const ctx = getAccordionContext();

  const ctxTransitionType = $derived(ctx?.transitionType ?? transitionType);
  // Check if transitionType is explicitly set to undefined in props
  const useTransition = $derived(transitionType === "none" ? false : ctxTransitionType === "none" ? false : true);

  // single selection
  const self = Symbol("accordion-item");

  const updateSingleSelection = useSingleSelection<symbol>((value) => (open = value === self));

  $effect(() => {
    updateSingleSelection(open, self);
  });

  const handleToggle = () => {
    open = !open;
  };

  const { base, button, content, active, inactive } = $derived(accordionItem({ flush: ctx?.flush, open }));

  let buttonClass = $derived(clsx(open && !ctx?.flush && (styling.active || ctx?.activeClass || active()), !open && !ctx?.flush && (styling.inactive || ctx?.inactiveClass || inactive())));

  let baseClass = $derived(base({ class: clsx(getTheme("accordionItem")?.base, className) }));
  let buttonCls = $derived(button({ class: clsx(buttonClass, getTheme("accordionItem")?.button, styling.button) }));
  let contentCls = $derived(content({ class: clsx(getTheme("accordionItem")?.content, styling.content) }));
</script>

<h2 class={baseClass}>
  <button type="button" onclick={handleToggle} class={buttonCls} aria-expanded={open}>
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
    <div transition:transitionType={transitionParams as ParamsType}>
      <div class={contentCls}>
        {@render children()}
      </div>
    </div>
  {/if}
{:else}
  <div class={open ? "block" : "hidden"}>
    <div class={contentCls}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L207)
## Props
@prop children
@prop header
@prop arrowup
@prop arrowdown
@prop open = $bindable(false)
@prop activeClass
@prop inactiveClass
@prop transitionType = slide
@prop transitionParams
@prop class: className
@prop classes
@prop headerClass
@prop contentClass
-->
