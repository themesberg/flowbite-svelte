<script lang="ts">
  import { getContext } from 'svelte';
  import type { TabCtxType } from './Tabs.svelte';
  import { writable } from 'svelte/store';
  import classNames from 'classnames';

  export let open: boolean = false;
  export let title: string = 'Tab title';
  export let activeClasses: string | undefined = undefined;
  export let inactiveClasses: string | undefined = undefined;
  export let defaultClass: string =
    'inline-block text-sm font-medium text-center disabled:cursor-not-allowed';

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
  $: buttonClass = classNames(
    defaultClass,
    open ? activeClasses ?? ctx.activeClasses : inactiveClasses ?? ctx.inactiveClasses,
    open && 'active'
    // $$restProps.disabled && 'cursor-not-allowed pointer-events-none'
  );
</script>

<li class={classNames('group', $$props.class)} role="presentation">
  <button
    type="button"
    on:click={() => (open = true)}
    on:blur
    on:click
    on:contextmenu
    on:focus
    on:keydown
    on:keypress
    on:keyup
    on:mouseenter
    on:mouseleave
    on:mouseover
    role="tab"
    {...$$restProps}
    class={buttonClass}>
    <slot name="title">{title}</slot>
  </button>

  {#if open}
    <div class="hidden tab_content_placeholder">
      <div use:init>
        <slot />
      </div>
    </div>
  {/if}
</li>
