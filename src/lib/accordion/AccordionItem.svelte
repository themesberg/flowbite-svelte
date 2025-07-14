<script lang="ts">
  import { slide } from "svelte/transition";
  import { getContext } from "svelte";
  import { writable } from "svelte/store";
  import { accordionItem, type AccordionItemTheme } from ".";
  import { type AccordionCtxType, type AccordionItemProps, type ParamsType, cn } from "$lib";
  import { getTheme } from "$lib/theme/themeUtils";

  let { children, header, arrowup, arrowdown, open = $bindable(false), activeClass, inactiveClass, transitionType = slide, transitionParams, class: className, headerClass, contentClass }: AccordionItemProps = $props();

  const ctxTransitionType = getContext("ctxTransitionType");
  // Check if transitionType is explicitly set to undefined in props
  const useTransition = transitionType === "none" ? false : ctxTransitionType === "none" ? false : true;

  // Theme context
  const theme = getTheme("accordionitem");

  const ctx: AccordionCtxType = getContext("ctx") ?? {};

  // single selection
  const self = {};
  const selected = ctx.selected ?? writable();

  if (open) selected.set(self);

  selected.subscribe((x) => (open = x === self));

  const handleToggle = () => selected.set(open ? {} : self);

  const { base, button, content, active, inactive } = $derived(accordionItem({ flush: ctx.flush, open }));

  let buttonClass = $derived(cn(button(), open && !ctx.flush && (activeClass || ctx.activeClass || active()), !open && !ctx.flush && (inactiveClass || ctx.inactiveClass || inactive()), className));
</script>

<h2 class={cn(base({ class: headerClass }), (theme as AccordionItemTheme)?.base)}>
  <button type="button" onclick={handleToggle} class={cn(buttonClass, (theme as AccordionItemTheme)?.button)} aria-expanded={open}>
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
      <div class={cn(content({ class: contentClass }), (theme as AccordionItemTheme)?.content)}>
        {@render children()}
      </div>
    </div>
  {/if}
{:else}
  <div class={open ? "block" : "hidden"}>
    <div class={cn(content({ class: contentClass }), (theme as AccordionItemTheme)?.content)}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L170)
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
@prop headerClass
@prop contentClass
-->
