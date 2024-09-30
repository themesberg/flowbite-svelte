<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';
  import { twMerge } from 'tailwind-merge';

  interface $$Props extends HTMLButtonAttributes {
    open?: boolean;
    title?: string;
    activeClasses?: string;
    inactiveClasses?: string;
    defaultClass?: string;
    divClass?: string;
  }

  export let open: $$Props['open'] = false;
  export let title: $$Props['title'] = 'Tab title';
  export let activeClasses: $$Props['activeClasses'] = undefined;
  export let inactiveClasses: $$Props['inactiveClasses'] = undefined;
  export let defaultClass: $$Props['defaultClass'] = 'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';
  export let divClass: $$Props['divClass'] = '';

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

  let buttonClass: string;
  $: buttonClass = twMerge(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && 'active'
    // $$restProps.disabled && 'cursor-not-allowed pointer-events-none'
  );
</script>

<li class={twMerge('group', $$props.class)} role="presentation">
  <button type="button" on:click={() => (open = true)} on:blur on:click on:contextmenu on:focus on:keydown on:keypress on:keyup on:mouseenter on:mouseleave on:mouseover role="tab" {...$$restProps} class={buttonClass}>
    <slot name="title">{title}</slot>
  </button>

  {#if open}
    <div class="hidden tab_content_placeholder">
      <div use:init class={divClass}>
        <slot />
      </div>
    </div>
  {/if}
</li>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Props
@prop export let open: $$Props['open'] = false;
@prop export let title: $$Props['title'] = 'Tab title';
@prop export let activeClasses: $$Props['activeClasses'] = undefined;
@prop export let inactiveClasses: $$Props['inactiveClasses'] = undefined;
@prop export let defaultClass: $$Props['defaultClass'] = 'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';
@prop export let divClass: $$Props['divClass'] = '';
-->
