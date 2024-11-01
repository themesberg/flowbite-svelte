<script lang="ts">
  import { twMerge } from "tailwind-merge";
  import { slide } from "svelte/transition";
  import { getContext } from "svelte";
  import { writable } from "svelte/store";
  import { type AccordionCtxType, type AccordionItemProps as Props, accordionitem } from ".";
  import type { ParamsType } from "../types";

  let { children, header, arrowup, arrowdown, open = $bindable(false), activeClass, inactiveClass, transition = slide, params, class: className }: Props = $props();

  const ctx: AccordionCtxType = getContext("ctx") ?? {};
  // selected type is writable in AccordionCtxType
  if (!ctx.selected) {
    ctx.selected = writable();
  }

  // single selection
  const self = {};
  const selected = ctx.isSingle ? ctx.selected : writable();

  // open && selected.set(self);
  if (open) selected.set(self);

  selected.subscribe((x) => (open = x === self));

  const handleToggle = () => selected.set(open ? {} : self);

  const { base, button, content, active, inactive } = accordionitem({ flush: ctx.flush, open });

  let buttonClass = $derived(twMerge(button(), open && !ctx.flush && (activeClass || ctx.activeClass || active()), !open && !ctx.flush && (inactiveClass || ctx.inactiveClass || inactive()), className));
</script>

<h2 class={base()}>
  <button onclick={handleToggle} type="button" class={buttonClass} aria-expanded={open}>
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
  <div transition:transition={params as ParamsType}>
    <div class={content()}>
      {@render children()}
    </div>
  </div>
{/if}

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children: Snippet;
@props:header: Snippet;
@props:arrowup: Snippet;
@props:arrowdown: Snippet;
@props:open: boolean = $bindable(false);
@props:activeClass: string;
@props:inactiveClass: string;
@props:transition: TransitionFunc = slide;
@props:params: ParamsType;
@props:class: string;
-->
