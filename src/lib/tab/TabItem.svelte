<script lang="ts">
  import { getContext } from 'svelte';
  import { writable } from 'svelte/store';
  import { type TabitemProps as Props, type TabCtxType, tabItem } from '.';

  let {
    children,
    titleSlot,
    open = false,
    title = 'Tab title',
    activeClass,
    inactiveClass,
    class: className,
    disabled,
    ...attributes
  }: Props = $props();

  const ctx = getContext<TabCtxType>('ctx') ?? {};
  $inspect('ctx from item: ', ctx);
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
  
  const { base, button, content } = $derived(tabItem({ open, disabled }));
</script>

<li class={base({ class: className })} role="presentation" {...attributes}>
  <button
    type="button"
    onclick={() => (open = true)}
    role="tab"
    {disabled}
    class={button({ class: open ? activeClass ?? ctx.activeClass : inactiveClass ?? ctx.inactiveClass})}
  >
    {#if titleSlot}
      {@render titleSlot()}
    {:else}
      {title}
    {/if}
  </button>

  {#if open && children}
    <div class={content()}>
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
@prop children
@prop titleSlot
@prop open = false
@prop title = 'Tab title'
@prop activeClasses
@prop inactiveClasses
@prop defaultClass
@prop class: className
@prop disabled
@prop ...attributes
-->
