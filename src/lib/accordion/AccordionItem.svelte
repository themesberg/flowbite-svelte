<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { slide } from "svelte/transition";
  import { getContext } from "svelte";
  import { writable } from "svelte/store";

  import { accordionitem } from ".";
  import type { AccordionCtxType, AccordionItemProps, ParamsType, BaseThemes } from "$lib/types";
  import clsx from "clsx";

  let { children, header, arrowup, arrowdown, open = $bindable(false), activeClass, inactiveClass, transitionType = slide, transitionParams, class: className, headerClass, contentClass }: AccordionItemProps = $props();

  // Theme context
  const context = getContext<BaseThemes>("themeConfig");
  // Use theme context if available, otherwise fallback to default
  const accordionitemTheme = context?.accordionitem || accordionitem;

  const ctx: AccordionCtxType = getContext("ctx") ?? {};

  // single selection
  const self = {};
  const selected = ctx.selected ?? writable();

  if (open) selected.set(self);

  selected.subscribe((x) => (open = x === self));

  const handleToggle = () => selected.set(open ? {} : self);

  const { base, button, content, active, inactive } = $derived(accordionitemTheme({ flush: ctx.flush, open }));

  let buttonClass = $derived(twMerge(button(), open && !ctx.flush && (activeClass || ctx.activeClass || active()), !open && !ctx.flush && (inactiveClass || ctx.inactiveClass || inactive()), clsx(className)));
</script>

<h2 class={base({ class: headerClass })}>
  <button type="button" onclick={handleToggle} class={buttonClass} aria-expanded={open}>
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
{#if open}
  <div transition:transitionType={transitionParams as ParamsType}>
    <div class={content({ class: contentClass })}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[AccordionItemProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L168)
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
