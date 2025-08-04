<script lang="ts">
  import { type AccordionCtxType, type AccordionItemProps, type ParamsType } from "$lib";
  import { getTheme, warnThemeDeprecation } from "$lib/theme/themeUtils";
  import { useSingleSelection } from "$lib/utils/singleselection.svelte";
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { slide } from "svelte/transition";
  import { accordionItem } from ".";

  let { children, header, arrowup, arrowdown, open = $bindable(false), activeClass, inactiveClass, transitionType = slide, transitionParams, class: className, classes, headerClass, contentClass }: AccordionItemProps = $props();

  warnThemeDeprecation(
    "AccordionItem",
    {
      headerClass,
      contentClass,
      activeClass,
      inactiveClass
    },
    {
      headerClass: "button",
      contentClass: "content",
      activeClass: "active",
      inactiveClass: "inactive"
    }
  );

  let styling: typeof classes = $derived(classes ?? { button: headerClass, content: contentClass, active: activeClass, inactive: inactiveClass });

  const ctx: AccordionCtxType = getContext("ctx") ?? {};

  const ctxTransitionType = ctx.transitionType ?? transitionType;
  // Check if transitionType is explicitly set to undefined in props
  const useTransition = transitionType === "none" ? false : ctxTransitionType === "none" ? false : true;

  // Theme context
  const theme = getTheme("accordionItem");

  // single selection
  const self = Symbol("accordion-item");

  const updateSingleSelection = useSingleSelection<symbol>((value) => (open = value === self));

  $effect(() => {
    updateSingleSelection(open, self);
  });

  const handleToggle = () => {
    open = !open;
  };

  const { base, button, content, active, inactive } = $derived(accordionItem({ flush: ctx.flush, open }));

  let buttonClass = $derived(clsx(open && !ctx.flush && (styling.active || ctx.activeClass || active()), !open && !ctx.flush && (styling.inactive || ctx.inactiveClass || inactive())));
</script>

<h2 class={base({ class: clsx(theme?.base, className) })}>
  <button type="button" onclick={handleToggle} class={button({ class: clsx(buttonClass, theme?.button, styling.button) })} aria-expanded={open}>
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
      <div class={content({ class: clsx(theme?.content, styling.content) })}>
        {@render children()}
      </div>
    </div>
  {/if}
{:else}
  <div class={open ? "block" : "hidden"}>
    <div class={content({ class: clsx(theme?.content, styling.content) })}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L187)
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
