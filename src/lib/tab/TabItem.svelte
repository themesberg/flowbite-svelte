<script lang="ts">
  import type { Snippet } from 'svelte';
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';
  interface Props {
    children?: Snippet;
    titleSlot?: Snippet;
    open?: boolean;
    title?: string;
    activeClasses?: string;
    inactiveClasses?: string;
    defaultClass?: string;
    class?: string;
    disabled?: boolean;
  }

  let { children, titleSlot, open = false, title = 'Tab title', activeClasses, inactiveClasses, defaultClass, class: className, disabled, ...attributes }: Props = $props();
  
  let defaultCls: string = twMerge('inline-block text-sm font-medium text-center disabled:cursor-not-allowed', defaultClass);

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  const selected = ctx.selected ?? writable<HTMLElement>();

  function init(node: HTMLElement) {
    selected.set(node);

    const destroy = selected.subscribe((x) => {
      if (x !== node) {
        open = false;
      }
    });

    return { destroy };
  }
  let buttonClass = $state('')
  $effect(() => {
    buttonClass = twMerge(
      defaultCls,
      open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
      open && 'active'
    );
  })
 
</script>

<li class={twMerge('group', className)} role="presentation" >
  <button type="button" onclick={() => (open = true)} role="tab" {disabled} class={buttonClass}>
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>

  {#if open && children}
    <div class="hidden tab_content_placeholder">
      <div use:init>
        {@render children()}
      </div>
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://svelte-5-ui-lib.codewithshin.com/)
## Props
@props: children?: Snippet;
@props:titleSlot?: Snippet;
@props:open?: boolean;
@props:title?: string;
@props:activeClasses?: string;
@props:inactiveClasses?: string;
@props:defaultClass?: string;
@props:class?: string;
@props:disabled?: boolean;
-->
