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
    fullwidthClass?: string;
    class?: string;
    disabled?: boolean;
  }

  let { children, titleSlot, open = false, title = 'Tab title', activeClasses, inactiveClasses, fullwidthClass, class: className, disabled, ...attributes }: Props = $props();
  // export let open: boolean = false;
  // export let title: string = 'Tab title';
  // let activeCls: string | undefined = undefined;
  // export let inactiveClasses: string | undefined = undefined;
  let defaultCls: string = fullwidthClass ? fullwidthClass : 'inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700';
// inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700
  const ctx = getContext<TabCtxType>('ctx') ?? {};
  // single selection
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
    // $$restProps.disabled && 'cursor-not-allowed pointer-events-none'
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

  {#if open}
    <div class="hidden tab_content_placeholder">
      <div use:init>
        {@render children()}
      </div>
    </div>
  {/if}
</li>
